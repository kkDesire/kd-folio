import { defineCollection, defineContentConfig, z } from '@nuxt/content'

function createBaseSchema() {
  return z.object({
    title: z.string(),
    description: z.string(),
  })
}

function createButtonSchema() {
  return z.object({
  })
}

function createImageSchema() {
  return z.object({
    src: z.string().editor({ input: 'media' }),
    alt: z.string(),
  })
}

function createAuthorSchema() {
  return z.object({
  })
}

function createTestimonialSchema() {
  return z.object({
    quote: z.string(),
    author: createAuthorSchema(),
  })
}

const commonIndexSchema = z.object({
  hero: z.object({
    links: z.array(createButtonSchema()),
    images: z.array(createImageSchema()),
  }),
  about: createBaseSchema(),
  experience: createBaseSchema().extend({
    items: z.array(z.object({
      date: z.date(),
      position: z.string(),
      company: z.object({
        name: z.string(),
        url: z.string(),
        logo: z.string().editor({ input: 'icon' }),
        color: z.string(),
      }),
    })),
  }),
  testimonials: z.array(createTestimonialSchema()),
  blog: createBaseSchema(),
  faq: createBaseSchema().extend({
    categories: z.array(
      z.object({
        title: z.string().nonempty(),
        questions: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty(),
          }),
        ),
      }),
    ),
  }),
})

const commonBlogSchema = z.object({
  minRead: z.number(),
  date: z.date(),
  image: z.string().nonempty().editor({ input: 'media' }),
  author: createAuthorSchema(),
})

export default defineContentConfig({
  collections: {
    index_fr: defineCollection({
      type: 'page',
      source: 'fr/index.yml',
      schema: commonIndexSchema,
    }),
    index_en: defineCollection({
      type: 'page',
      source: 'en/index.yml',
      schema: commonIndexSchema,
    }),

    blog_fr: defineCollection({
      source: 'fr/blog/*.md',
      type: 'page',
      schema: commonBlogSchema,
    }),
    blog_en: defineCollection({
      source: 'en/blog/*.md',
      type: 'page',
      schema: commonBlogSchema,
    }),

  },
})
