import {create, StoreApi} from "zustand";
import {DenizenDtoType, DenizenRolesWorkersEnumDtoType} from "../../bounded-contexts/population/population.types.ts";
import {locations, population, warehouses} from "../../_assets/data/db.ts";
import {LocationDtoType} from "../../bounded-contexts/bounty/bounty.types.ts";
import {WarehouseUnitDtoType} from "../../bounded-contexts/warehouse/warehouse.types.ts";
import {randomIntFromMinMax} from "../utils/numbers.utils.ts";
import {sleep} from "../utils/timers.utils.ts";

const handleWorkerDispatch = (
    workerType: DenizenRolesWorkersEnumDtoType,
    set: StoreApi<PopulationStore>['setState'],
    get: StoreApi<PopulationStore>['getState'],
): DenizenDtoType | null => {
    const workersAtHome =
        get().population.filter(
            (d: DenizenDtoType) => d.isHome && d.role === workerType
        );

    if (workersAtHome.length > 0) {
        const workerToDispatch = workersAtHome[0];

        set((state: { population: DenizenDtoType[]; }) => {
            const workerIndex = state.population.findIndex(d => d.uuid === workerToDispatch.uuid);
            state.population[workerIndex].isHome = !state.population[workerIndex].isHome;

            return {population: state.population}
        });

        sleep(randomIntFromMinMax(2, 12), () => {
            set((state: { population: DenizenDtoType[]; }) => {
                const workerIndex = state.population.findIndex(d => d.uuid === workerToDispatch.uuid);
                state.population[workerIndex].isHome = !state.population[workerIndex].isHome;

                return {population: state.population}
            });
        });

        return workerToDispatch;
    }

    return null;
};

type PopulationStore = {
    population: DenizenDtoType[],
    dispatchScout: () => DenizenDtoType | null,
    dispatchHarvester: () => DenizenDtoType | null,
}
export const usePopulationStore = create<PopulationStore>()((setState, getState) => {
    return {
        population,
        dispatchScout: () => {
            return handleWorkerDispatch('scout', setState, getState);
        },
        dispatchHarvester: () => {
            return handleWorkerDispatch('harvester', setState, getState);
        },
    };
});

type LocationsStore = {
    locations: LocationDtoType[],
    updateLocation: () => Promise<LocationDtoType | null>,
}
export const useLocationsStore = create<LocationsStore>()((setState, getState) => {
    return {
        locations: locations,
        updateLocation: async () => {
            await sleep(randomIntFromMinMax(2, 4));

            const bountyLocations =
                getState().locations.filter(
                    (l: LocationDtoType) => !l.isFound
                );

            if (bountyLocations.length > 0) {
                const foundLocation = bountyLocations[0];

                setState((state: { locations: LocationDtoType[]; }) => {
                    const locationIndex =
                        state.locations.findIndex(l => l.uuid === foundLocation.uuid);
                    state.locations[locationIndex].isFound = !state.locations[locationIndex].isFound;

                    return {locations: state.locations}
                });

                return foundLocation;
            }

            return null;
        }
    }
});

export const useWarehousesStore = create<WarehouseUnitDtoType[]>()(() => {
    return warehouses;
});
