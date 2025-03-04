# TheGoodNews

TheGoodNews is a simple website that only shows you the good news happening every day around the world. In a time when negative news is everywhere, this site serves as a refreshing reminder of the positive moments happening all around us.

## Features

- **Positive News Only:** Aggregates and displays only uplifting and positive news stories.
- **Simple Design:** A clean, minimal interface designed to let good news take center stage.

## Technologies Used

### Front End
- HTML
- CSS
- JavaScript

### Back End
- Node.js
- Express


### Environment Variables

Create a `.env` file in the root directory and add the following variables:

- SUBMIT_SECRET_CODE=YourSecretCodeHere
- MONGODB_URI=YourMongoDBConnectionString
- PORT=3000

### Prerequisites

- [MongoDB](https://www.mongodb.com/try/download/community)
– Ensure you have MongoDB installed and running locally, or update the `MONGODB_URI` in your `.env` file to point to your remote MongoDB instance.


## Installation

To run the website locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tobiaswdl/The-Good-News-Site-.git
   cd The-Good-News-Site-

2. **Install dependencies:**
   ```bash
   npm install

 3. **Run the application:**
    ```bash
    npm start

  4. **Open the Website:**
     Open your Browser and navigate to http://localhost:3000
     or the port specified in your project.

## Contributing 

 Contributions are welcome! If you have ideas to improve the site, please follow these steps:

 1. Fork the repository
 2. Create a new branch for your feature or bug fix.
 3. Commit your changes with clear messages.
 4. Open a pull request explaining your changes.

    Please make ensure your contributions adhere to the existing code style and include docmentation as needed 
