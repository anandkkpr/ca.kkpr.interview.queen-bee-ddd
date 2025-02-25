import {create, StoreApi} from "zustand";
import {DenizenDtoType, DenizenRolesWorkersEnumDtoType} from "../../bounded-contexts/population/population.types.ts";
import {locations, population, warehouses} from "../../_assets/data/db.ts";
import {LocationDtoType} from "../../bounded-contexts/bounty/bounty.types.ts";
import {WarehouseUnitDtoType} from "../../bounded-contexts/warehouse/warehouse.types.ts";
import {randomIntFromMinMax} from "../utils/numbers.utils.ts";
import {sleep} from "../utils/timers.utils.ts";

type PopulationStore = {
    population: DenizenDtoType[],
    dispatchScout: () => DenizenDtoType | null,
    dispatchHarvester: () => DenizenDtoType | null,
}

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

export const usePopulationStore = create<PopulationStore>((set, get) => {
    return {
        population,
        dispatchScout: () => {
            return handleWorkerDispatch('scout', set, get);
        },
        dispatchHarvester: () => {
            return handleWorkerDispatch('harvester', set, get);
        },
    };
});

export const useLocationsStore = create<LocationDtoType[]>(() => {
    return locations;
});

export const useWarehousesStore = create<WarehouseUnitDtoType[]>(() => {
    return warehouses;
});
