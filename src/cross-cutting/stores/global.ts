import {create} from "zustand";
import {DenizenDtoType} from "../../bounded-contexts/population/population.types.ts";
import {locations, population, warehouses} from "../../_assets/data/db.ts";
import {LocationDtoType} from "../../bounded-contexts/bounty/bounty.types.ts";
import {WarehouseUnitDtoType} from "../../bounded-contexts/warehouse/warehouse.types.ts";

type PopulationStore = {
    population: DenizenDtoType[],
    dispatchScout: () => void,
    dispatchHarvester: () => void,
}
export const usePopulationStore = create<PopulationStore>(() => {
    return {
        population,
        dispatchScout: () => {
            alert('Dispatched Scout')
        },
        dispatchHarvester: () => {
            alert('Dispatched Harvester')
        },
    };
});

export const useLocationsStore = create<LocationDtoType[]>(() => {
    return locations;
});

export const useWarehousesStore = create<WarehouseUnitDtoType[]>(() => {
    return warehouses;
});
