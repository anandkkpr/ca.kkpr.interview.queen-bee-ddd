import {DenizenDtoType} from "../../bounded-contexts/population/population.types.ts";
import {LocationDtoType} from "../../bounded-contexts/bounty/bounty.types.ts";
import {WarehouseUnitDtoType} from "../../bounded-contexts/warehouse/warehouse.types.ts";

export const population: DenizenDtoType[] = [
    {
        uuid: '9e5b7ac1-726f-4e9b-8deb-c370cec41348',
        role: 'queen',
        name: 'Cecilia',
        carryCapacityInGrams: 2,
        isHome: true,
    },
    {
        uuid: '5f0af68b-e7f0-47f0-8b43-197d11e3968b',
        role: 'scout',
        name: 'Markus',
        carryCapacityInGrams: 2,
        isHome: true,
    },
    {
        uuid: '270bf0e1-f4a0-41d8-b3f3-4f2d245288f9',
        role: 'scout',
        name: 'Shitake',
        carryCapacityInGrams: 2,
        isHome: true,
    },
    {
        uuid: '6c9926b7-6083-4406-ac95-a096c1d06a23',
        role: 'scout',
        name: 'Rabbit',
        carryCapacityInGrams: 2,
        isHome: true,
    },
    {
        uuid: '7bccc863-4bf9-41e4-8aca-c1c7dc1605b2',
        role: 'harvester',
        name: 'Brutus',
        carryCapacityInGrams: 65,
        isHome: true,
    },
    {
        uuid: 'a3179e5a-54c0-486b-ba98-8ae68ec9dedc',
        role: 'harvester',
        name: 'Ptolemy',
        carryCapacityInGrams: 87,
        isHome: true,
    },
    {
        uuid: 'fa29f92a-b70e-45a2-bbe6-e83c82c7a1a0',
        role: 'harvester',
        name: 'Gary',
        carryCapacityInGrams: 45,
        isHome: true,
    },
    {
        uuid: '04e71a07-c3f4-4aa9-a035-cf8aaa920d3d',
        role: 'harvester',
        name: 'Mithun',
        carryCapacityInGrams: 90,
        isHome: true,
    },
    {
        uuid: '0e34a916-6805-4b83-8848-e160e09d2130',
        role: 'harvester',
        name: 'Ayushman',
        carryCapacityInGrams: 512,
        isHome: true,
    }
];

export const locations: LocationDtoType[] = [
    {
        uuid: '64e8cef6-3106-4817-a93c-36e91ac8c423',
        name: 'Tamara\'s Garden',
        isFound: false,
        pollenBounty: [
            {
                uuid: 'afae15f4-3f66-45ee-8f57-07cd3840cedb',
                grams: 6
            }
        ]
    },
    {
        uuid: 'bdf22c36-703e-4f37-976e-a340f12307b6',
        name: 'Flinnley Peak',
        isFound: false,
        pollenBounty: [
            {
                uuid: 'c6e38cde-2458-42b8-88bf-c8d0b62fcbda',
                grams: 24
            }
        ]
    },
    {
        uuid: 'eb601eaa-b052-4bad-b69d-93614384925b',
        name: 'Downton Abbey',
        isFound: false,
        pollenBounty: [
            {
                uuid: '53f4ab96-b4a9-4bfd-9c7d-a639e6603420',
                grams: 2
            }
        ]
    },
];

export const warehouses: WarehouseUnitDtoType[] = [
    {
        uuid: '0a5ee170-f03b-4066-b6b4-13ec18af64d7',
        name: 'NE Quad',
        dateUpdated: '2025-02-24',
        maxCapacityInGrams: 100,
        pollenCache: [
            {
                uuid: '6eeb7708-43a1-422e-98c4-e68876b21077',
                grams: 6
            }
        ]
    },
    {
        uuid: '07b662fa-ac72-404c-ad23-052686b522bb',
        name: 'SW Quad',
        dateUpdated: '2025-02-22',
        maxCapacityInGrams: 200,
        pollenCache: [
            {
                uuid: '10833418-8ea7-4b75-9580-814aa59440ca',
                grams: 3
            },
        ]
    },
    {
        uuid: '21a1371c-0d17-4f5d-8c54-df186a73a389',
        name: 'SE Quad',
        dateUpdated: '2025-02-23',
        maxCapacityInGrams: 50,
        pollenCache: [
            {
                uuid: 'cc54b7ec-7eb5-429a-acb2-d29ffd2b8ea7',
                grams: 6
            },
            {
                uuid: '080d58ec-d296-4e6a-9570-18bfce79850b',
                grams: 58
            }
        ]
    },
    {
        uuid: 'b56c6751-cb27-47ec-b078-f3c7f8e9192d',
        name: 'NW Quad',
        dateUpdated: '2025-02-20',
        maxCapacityInGrams: 654,
        pollenCache: []
    },
]