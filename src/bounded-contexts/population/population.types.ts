import {z} from "zod";
import {IntegerPositiveDto, UuidDto} from "../../cross-cutting/types/cross-cutting.types.ts";

export const DenizenRolesEnumDto = z.enum(['queen', 'harvester', 'scout']);
export type DenizenRolesEnumDtoType = z.infer<typeof DenizenRolesEnumDto>;
export const DenizenRolesWorkersEnum = DenizenRolesEnumDto.extract(['scout', 'harvester']);
export type DenizenRolesWorkersEnumDtoType = z.infer<typeof DenizenRolesEnumDto>;

export const DenizenDto = z.object({
    uuid: UuidDto,
    role: DenizenRolesEnumDto,
    name: z.string(),
    bio: z.string().nullish(),
    carryCapacityInGrams: IntegerPositiveDto,
    isHome: z.boolean(),
})
export type DenizenDtoType = z.infer<typeof DenizenDto>;

export const CensusDto = z.object({
    scouts: IntegerPositiveDto,
    harvesters: IntegerPositiveDto,
});
export type CensusDtoType = z.infer<typeof CensusDto>;

export const WorkersInFieldDto = CensusDto;
export type WorkersInFieldDtoType = z.infer<typeof CensusDto>;

