# Cuisiner
## Inspiration

As lovers of food, we really appreciate the way that food brings cultures and communities together. We wanted to create a tool that would help those who want to learn more about the diverse cultures around them through learning about their cuisine.

## What it does

In your browser, you are able to upload a photo from your device and run the image classification model on your image. The app then shows the name of the food, the level of confidence in that classification, along with a short description of the food and its allergens. 

With the power of machine learning, Cuisiner can recognize even the most obscure and lesser-known dishes, making it a valuable tool for foodies, travelers, and anyone who loves to explore new cuisines.

## How we built it

### Image Classification

In order to get our program to correctly identify foods that the user inputs, we trained an image classification machine learning model using PyTorch and Fastai. 

### Flask

We used Flask as the web application framework for our project. It was surprisingly easy to use, despite never having done so before. 

## Challenges we ran into
We had actually never worked with any machine learning models before, and so while it was ambitious and we had **many** failed attempts with inaccurate models, we finally arrived at a reasonably accurate model, albeit with a relatively limited dataset in order to be able to train it in the time we had. 

## Accomplishments that we're proud of
Connecting the front end to the back end was an initial concern for us, and we struggled with connecting the passing back the uploaded image from the user into the model, and then returning the results back to the front end. However, using Flask we were able to seamlessly integrate the two endpoints after much research, without needing an API. 

## What we learned
We now know how much time (and how much data) is required to precisely train an image classification model. 

## What's next for Cuisiner
Training Cuisiner's ML model on a larger dataset with a wider variety of foods would definitely be our most immediate next step. We would also hope to translate the descriptions to different languages in an effort to make it even easier for people across cultures to use our tool and connect with others. 














