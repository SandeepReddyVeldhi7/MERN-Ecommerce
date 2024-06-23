# To Start the Project 
Frontend: npm start
Backend :npm run dev

+ Create React App
+ Configured TailwindCSS
+ Header
+ Routing of App 
- Fronted router index.js
+ Redux store
- for user details
 + And some Helper functions in Help folder
 + ASSEST folder have all images

 + Used useContext to access some functions in globally
 __
 + BACKEND
 + MONGODB CONNECTED  

  + Used JWT for user authentication and also used in lot areas
 - routes in routes folder 
 * /register   (post)
 * /login (post)
 * /logout (post)
 * /userDetails (get)
 
 - Admin  access routes
 * /all-user  (get)
 * /update-user  (post)
 * /update-product (put)
 * /delete-product   (delete)
 * /all-products  (post)
 

 - product
 * /get-categoryProduct  (get)
 * /category-product    (post)
 * /product-details    (post)
 * /search           (get)

 - user add to cart
 * /addtocart               (post)
 * /countAddToCartProduct   (get)
 * /view-card-product        (get)
 * /update-cart-product     (post)
 * /delete-cart-product      (delete)


+ permissions as only Admin can only access the some routes and not all
 - In help holder we have condition to access this  
