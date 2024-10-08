declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"why-websites-matter.md": {
	id: "why-websites-matter.md";
  slug: "why-websites-matter";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};
"reports": {
"see-them-while-they're-here-website.mdx": {
	id: "see-them-while-they're-here-website.mdx";
  slug: "see-them-while-theyre-here-website";
  body: string;
  collection: "reports";
  data: InferEntrySchema<"reports">
} & { render(): Render[".mdx"] };
"the-wes-label-seo.mdx": {
	id: "the-wes-label-seo.mdx";
  slug: "the-wes-label-seo";
  body: string;
  collection: "reports";
  data: InferEntrySchema<"reports">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"outreach": {
"34dq": {
	id: "34dq";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"3q8n": {
	id: "3q8n";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"4tww": {
	id: "4tww";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"acrv": {
	id: "acrv";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"bcwe": {
	id: "bcwe";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"c2xe": {
	id: "c2xe";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"djy9": {
	id: "djy9";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"f2y6": {
	id: "f2y6";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"f5qb": {
	id: "f5qb";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"fegy": {
	id: "fegy";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"gzu2": {
	id: "gzu2";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"k73g": {
	id: "k73g";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"kc52": {
	id: "kc52";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"qpsp": {
	id: "qpsp";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"r44f": {
	id: "r44f";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"wbu8": {
	id: "wbu8";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
"x2ae": {
	id: "x2ae";
  collection: "outreach";
  data: InferEntrySchema<"outreach">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
