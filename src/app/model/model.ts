export class ModelId extends String {
	public static emptyId: ModelId = null;
}

export interface Model {
	id: ModelId;
}