import {z} from "zod";

export const UuidDto = z.string().uuid();
export type UuidDtoType = z.infer<typeof UuidDto>;

export const IntegerPositiveDto = z.number().int().positive();
export type IntegerPositiveDtoType = z.infer<typeof IntegerPositiveDto>;

