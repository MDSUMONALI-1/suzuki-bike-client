live site:https://suzuki-bikes.web.app/

Home page will have a header (simple navbar), banner, products, reviews, and footer. On the home page, the products will have a maximum of 6 items/products. You can put one or more products in a row based on your design. Each product should have a relevant name, image, short description, add a purchase or buy now button. If a user clicks on the purchase or buy now button it will take the user to the purchase page. -sc

Add one extra section in the home page in addition to the 5 sections mentioned above.-c

We will have another page on the top navigation bar (header) mentioning explore (you can give it a meaningful name based on your website). Clicking on the link will take the user to the explore page. On this page, users will see all the products you have. This means, the user will see at least 10 products on this page. Each item will have a name, description, image, price and button. Once a user clicks on this button, it will take the user to the purchase page.-c

The purchasepage will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to. Also, make sure, after reloading the page of a private route, the user is not redirected to the login page. The purchase page should display detailed information of the item the user has clicked somewhere at the top. It will also display the user's name and email address from the login system and the user will have a field to provide address, phone number and necessary information to place the order or to complete the purchase.-c

Implement email/ password (login/Register) based login system. The registration form should have the name and once a user is logged in, the user name, and the logout button should appear on the header which will log out the user once clicked. Displaying username on the header is optional. Please note that implementing the google, facebook, or github provider based authentication is also optional. -c

If a user is logged in, he/she will see another option on the header is called Dashboard and inside that dashboard a normal user (not an admin) will see options like pay,My Orders, Review, Logout. Based on your website idea, you can change the name of these menu items. The pay page will say: Payment system coming soon.

On the my orders page, the logged in user will see only his/her orders. If the user wants, he/she should be able to cancel/delete any order. Ask a confirmation message before deleting or canceling an item. Using browser confirmation dialog is ok.

On the Review page, users should be able to add a review and that review will appear on the home age. Right now you will see every review on the home page. There is no limit on the numbers of reviews or the order of the review.

If an admin logs in, he/she will not see the options that a normal user sees. Insted an admin will see Manage All Orders, Add A Product, Make Admin, Manage Products Logout. Based on your website idea, you can change the name of these menu items. Details about Manage all orders or Manage products will be provided later.

An Admin should be able to make another user an admin. If an admin wants, he/she will be able to add a product on the add a product page. After adding the product, this product will appear on the explore page. Please note, to add an image for a new product, you can just upload the image on any image hosting sites like imgbb, etc.and then have an input field to add the link of the image.

For our testing purpose please add one admin with the email address: admin@admin.com with password: 123456 -c

Use a database to store information. It could be mongodb atlas or any other noSQL database. -c