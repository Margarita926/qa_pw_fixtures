import { test as base } from '@playwright/test';
import { CreateArticlePage } from '../../src/ui/pages/articles/CreateArticlePage';
import { ViewArticlePage } from '../../src/ui/pages/articles/ViewArticlePage';
import { EditArticlePage } from '../../src/ui/pages/articles/EditArticlePage';




export const test = base.extend<{
  CreateArticlePage;
  ViewArticlePage;
  EditArticlePage;
  articleWithoutTags;
  articleWithOneTag;
  articleWithTwoTags;
}>({
  CreateArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },
  ViewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new ViewArticlePage(page);

    await use(viewArticlePage);
  },
  EditArticlePage: async ({ page }, use) => {
    const editArticlePage = new EditArticlePage(page);

    await use(editArticlePage);
  },
  


  articleWithoutTags: async ({}, use) => {
  const article = {
    title: `Test Article ${Math.random().toString(36).substring(2, 15)}`,
    description: 'This is a test article without tags.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: [],
  };
  await use(article);
},
articleWithOneTag: async ({}, use) => {
  const article = {
    title: `Test Article ${Math.random().toString(36).substring(2, 15)}`,
    description: 'This is a test article with one tag.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['test'],
  };
  await use(article);
},
articleWithTwoTags: async ({}, use) => {
  const article = {
    title: `Test Article ${Math.random().toString(36).substring(2, 15)}`,
    description: 'This is a test article with two tags.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['test', 'article'],
  };
  await use(article);
},
});

