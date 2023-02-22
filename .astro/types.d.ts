declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"application": {
"android.mdx": {
  id: "android.mdx",
  slug: "android",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"ansible.mdx": {
  id: "ansible.mdx",
  slug: "ansible",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"authelia.mdx": {
  id: "authelia.mdx",
  slug: "authelia",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"cubejs.mdx": {
  id: "cubejs.mdx",
  slug: "cubejs",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"docker.mdx": {
  id: "docker.mdx",
  slug: "docker",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"flipperzero.mdx": {
  id: "flipperzero.mdx",
  slug: "flipperzero",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"flutter.mdx": {
  id: "flutter.mdx",
  slug: "flutter",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"gcloud.mdx": {
  id: "gcloud.mdx",
  slug: "gcloud",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"git.mdx": {
  id: "git.mdx",
  slug: "git",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"godot.mdx": {
  id: "godot.mdx",
  slug: "godot",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"javascript.mdx": {
  id: "javascript.mdx",
  slug: "javascript",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"kubernetes.mdx": {
  id: "kubernetes.mdx",
  slug: "kubernetes",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"longhorn.mdx": {
  id: "longhorn.mdx",
  slug: "longhorn",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"lvm.mdx": {
  id: "lvm.mdx",
  slug: "lvm",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"ml.mdx": {
  id: "ml.mdx",
  slug: "ml",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"mysql.mdx": {
  id: "mysql.mdx",
  slug: "mysql",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nftables.mdx": {
  id: "nftables.mdx",
  slug: "nftables",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nmap.mdx": {
  id: "nmap.mdx",
  slug: "nmap",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nomad.mdx": {
  id: "nomad.mdx",
  slug: "nomad",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"obsidian.mdx": {
  id: "obsidian.mdx",
  slug: "obsidian",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"php.mdx": {
  id: "php.mdx",
  slug: "php",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"portainer.mdx": {
  id: "portainer.mdx",
  slug: "portainer",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"proxmox.mdx": {
  id: "proxmox.mdx",
  slug: "proxmox",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"pterodactyl.mdx": {
  id: "pterodactyl.mdx",
  slug: "pterodactyl",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"rust.mdx": {
  id: "rust.mdx",
  slug: "rust",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"strapi.mdx": {
  id: "strapi.mdx",
  slug: "strapi",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"terraform.mdx": {
  id: "terraform.mdx",
  slug: "terraform",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"traefik.mdx": {
  id: "traefik.mdx",
  slug: "traefik",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"unity.mdx": {
  id: "unity.mdx",
  slug: "unity",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"void.mdx": {
  id: "void.mdx",
  slug: "void",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"watchtower.mdx": {
  id: "watchtower.mdx",
  slug: "watchtower",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"webserver.mdx": {
  id: "webserver.mdx",
  slug: "webserver",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"wireguard.mdx": {
  id: "wireguard.mdx",
  slug: "wireguard",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"zsh.mdx": {
  id: "zsh.mdx",
  slug: "zsh",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
},
"blog": {
"theorycraft.mdx": {
  id: "theorycraft.mdx",
  slug: "theorycraft",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"config": {
"nginx.md": {
  id: "nginx.md",
  slug: "nginx",
  body: string,
  collection: "config",
  data: any
},
},
"crypto": {
"btc.md": {
  id: "btc.md",
  slug: "btc",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
},
"doge.md": {
  id: "doge.md",
  slug: "doge",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
},
"eth.md": {
  id: "eth.md",
  slug: "eth",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
},
},
"gaming": {
"df.mdx": {
  id: "df.mdx",
  slug: "df",
  body: string,
  collection: "gaming",
  data: InferEntrySchema<"gaming">
},
"lol.mdx": {
  id: "lol.mdx",
  slug: "lol",
  body: string,
  collection: "gaming",
  data: InferEntrySchema<"gaming">
},
},
"journal": {
"asset.md": {
  id: "asset.md",
  slug: "asset",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
},
"roguejester.md": {
  id: "roguejester.md",
  slug: "roguejester",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
},
"visualnovel.md": {
  id: "visualnovel.md",
  slug: "visualnovel",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
},
},
"legal": {
"eula.md": {
  id: "eula.md",
  slug: "eula",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
},
"privacy.md": {
  id: "privacy.md",
  slug: "privacy",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
},
"tos.md": {
  id: "tos.md",
  slug: "tos",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
},
},
"manga": {
"rj/main.md": {
  id: "rj/main.md",
  slug: "rj/main",
  body: string,
  collection: "manga",
  data: any
},
},
"news": {
"release-rigor.md": {
  id: "release-rigor.md",
  slug: "release-rigor",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
},
"npc": {
"lucifurr/emotion/happy.md": {
  id: "lucifurr/emotion/happy.md",
  slug: "lucifurr/emotion/happy",
  body: string,
  collection: "npc",
  data: any
},
"lucifurr/lucifurr.md": {
  id: "lucifurr/lucifurr.md",
  slug: "lucifurr/lucifurr",
  body: string,
  collection: "npc",
  data: any
},
},
"play": {
"rj.mdx": {
  id: "rj.mdx",
  slug: "rj",
  body: string,
  collection: "play",
  data: InferEntrySchema<"play">
},
"wvn.mdx": {
  id: "wvn.mdx",
  slug: "wvn",
  body: string,
  collection: "play",
  data: InferEntrySchema<"play">
},
},
"project": {
"api.mdx": {
  id: "api.mdx",
  slug: "api",
  body: string,
  collection: "project",
  data: any
},
"ar.mdx": {
  id: "ar.mdx",
  slug: "ar",
  body: string,
  collection: "project",
  data: any
},
"discord-sh.mdx": {
  id: "discord-sh.mdx",
  slug: "discord-sh",
  body: string,
  collection: "project",
  data: any
},
"galaxia.mdx": {
  id: "galaxia.mdx",
  slug: "galaxia",
  body: string,
  collection: "project",
  data: any
},
"roguejester.mdx": {
  id: "roguejester.mdx",
  slug: "roguejester",
  body: string,
  collection: "project",
  data: any
},
},
"releases": {
"1.md": {
  id: "1.md",
  slug: "1",
  body: string,
  collection: "releases",
  data: InferEntrySchema<"releases">
},
},
"security": {
"xss.mdx": {
  id: "xss.mdx",
  slug: "xss",
  body: string,
  collection: "security",
  data: InferEntrySchema<"security">
},
},
"stock": {
"aapl.mdx": {
  id: "aapl.mdx",
  slug: "aapl",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
"spy.mdx": {
  id: "spy.mdx",
  slug: "spy",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
"tsla.mdx": {
  id: "tsla.mdx",
  slug: "tsla",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
"vt.mdx": {
  id: "vt.mdx",
  slug: "vt",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
},
"team": {
"example.mdx": {
  id: "example.mdx",
  slug: "example",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"fudster.mdx": {
  id: "fudster.mdx",
  slug: "fudster",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"h0lybyte.mdx": {
  id: "h0lybyte.mdx",
  slug: "h0lybyte",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"keros.mdx": {
  id: "keros.mdx",
  slug: "keros",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"lvl21bellsprout.mdx": {
  id: "lvl21bellsprout.mdx",
  slug: "lvl21bellsprout",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"sean.mdx": {
  id: "sean.mdx",
  slug: "sean",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"silver91.mdx": {
  id: "silver91.mdx",
  slug: "silver91",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"ziggy9263.mdx": {
  id: "ziggy9263.mdx",
  slug: "ziggy9263",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
},
"theory": {
"deadcode.mdx": {
  id: "deadcode.mdx",
  slug: "deadcode",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
"fintech.mdx": {
  id: "fintech.mdx",
  slug: "fintech",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
"healthcare.mdx": {
  id: "healthcare.mdx",
  slug: "healthcare",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
"matrix.mdx": {
  id: "matrix.mdx",
  slug: "matrix",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
"programming.mdx": {
  id: "programming.mdx",
  slug: "programming",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
},
"tools": {
"status.mdx": {
  id: "status.mdx",
  slug: "status",
  body: string,
  collection: "tools",
  data: any
},
"webmaster.mdx": {
  id: "webmaster.mdx",
  slug: "webmaster",
  body: string,
  collection: "tools",
  data: any
},
},
"website": {
"about.mdx": {
  id: "about.mdx",
  slug: "about",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"c.mdx": {
  id: "c.mdx",
  slug: "c",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}