import { test } from '../_fixtures/fixtures';
import { TITLE_CANNOT_BE_EMPTY } from '../../src/ui/constants/articleErrorMessages';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';


test.beforeEach(async ({ page, newUserData, articleWithOneTag }) => {

  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, articleWithOneTag);
});

test('Remove the article `title` for the existing article', async ({ viewArticlePage, editArticlePage }) => {

  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTitleField('');

  await editArticlePage.clickUpdateArticleButton();
  await editArticlePage.assertErrorMessageContainsText( TITLE_CANNOT_BE_EMPTY,);
  
});