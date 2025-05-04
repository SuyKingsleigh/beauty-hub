export class LocationLinks {
  constructor(
    public waze?: Record<string, any>,
    public googleMaps?: string | undefined,
    public appleMaps?: string | undefined,
    public uber?: string | undefined,
  ) {}
}
