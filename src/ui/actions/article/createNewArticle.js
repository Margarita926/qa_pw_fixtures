import { SignUpPage } from '../../pages/auth/SignUpPage';
import { HomePage } from '../../pages/HomePage';
import {CreateArticlePage} from '../../pages/article/CreateArticlePage'
import { ViewArticlePage } from '../../pages/article/ViewArticlePage';
import { test } from '@playwright/test';

export async function createNewArticle(page, user, article) {
  await test.step(`Create new article`, async () => {
    const signUpPage = new SignUpPage(page);
    const homePage = new HomePage(page);
    const createArticlePage = new CreateArticlePage(page);
    const viewArticlePage = new ViewArticlePage(page);

    await homePage.assertYourFeedTabIsVisible();
    await homePage.clickNewArticleLink();
    await createArticlePage.fillTitleField(article.title);
    await createArticlePage.fillDescriptionField(article.description);
    await createArticlePage.fillTextField(article.text);

      // const specificTagName = 'MyUniqueTag' + Math.floor(Math.random() * 1000); 
      //   await editArticlePage.clickOnDeleteTag(specificTagName); 





if (article.tags && article.tags.length > 0) {
      await createArticlePage.fillTagField(article.tags.join(','));
    }
    await createArticlePage.clickPublishArticleButton();
    await viewArticlePage.assertArticleTitleIsVisible(article.title); 

    });
}
