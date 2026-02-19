import { SetMetadata } from "@nestjs/common";
export const ANONYMOUS = "ANONYMOUS";
export const Anonymous = () => SetMetadata(ANONYMOUS, true);
