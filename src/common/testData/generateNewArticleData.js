import { faker } from '@faker-js/faker';

export function generateNewArticleData(loggerOrTagNumber = undefined, tagNumber = 0) {
  let logger;
  let tagsCount;

  if (typeof loggerOrTagNumber === 'number' || loggerOrTagNumber === undefined) {
    logger = undefined;
    tagsCount = loggerOrTagNumber ?? 0;
  } else {
    logger = loggerOrTagNumber;
    tagsCount = tagNumber;
  }

  const tags = Array.from({ length: tagsCount }, () => faker.lorem.word());

  const article = {
    title: faker.lorem.words(),
    description: faker.lorem.sentence(4),
    text: faker.lorem.sentences(2),
    tags,
  };

  if (logger?.warn) {
    logger.warn(`New article generated: ${JSON.stringify(article)}`);
  }

  return article;
}
      