import { Type } from "typebox";

/**
 * `{ type: "string", enum: [...] }` schema typed as a TypeBox schema, so it composes with
 * `Type.Optional`/`Type.Object` and `Static`. pi-ai's own StringEnum returns a pi-schema
 * `Schema` since pi 1.5, which TypeBox cannot infer through. The emitted JSON is unchanged.
 */
export function StringEnum<T extends readonly string[]>(values: T, options?: { description?: string; default?: T[number] }) {
	return Type.Unsafe<T[number]>({
		type: "string",
		enum: values,
		...(options?.description && { description: options.description }),
		...(options?.default && { default: options.default }),
	});
}
