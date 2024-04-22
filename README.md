# ClassSeeker

ClassSeeker is a web application designed for the "Design and Analysis of Algorithms" project. It allows users to find available classes during lunch hours on different floors of a university building. The application provides a user-friendly interface where users can select the day order and lunch hour to see which classes are free during that time.

## Features

- **Select Day Order:** Choose from 5 different day orders (Day Order 1 to Day Order 5).
- **Select Lunch Hour:** Two lunch hours available (11:35 - 12:25 and 12:30 - 1:20).
- **Find Free Classes:** Upon selecting the day order and lunch hour, the application displays the free classes available during that time.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS (Styling)
  - JavaScript (Logic and Interactivity)

## Data Structure and Algorithm

- **Data Structure:**
  - Array of Objects (`classes` array in `seek.js`)
  - Each object represents a class with properties like `id` and `floor`.

- **Algorithm:**
  - Filtering Algorithm (`findFreeClasses` function in `seek.js`)
  - Finds free classes based on the selected day order and lunch hour.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ClassSeeker.git
   ```
2. Open `index.html` in your web browser to access the homepage.
3. Navigate to `seek.html` to use the ClassSeeker functionality.

## Usage

1. **Homepage (`index.html`):**
   - Provides a brief overview of ClassSeeker.
   - Navigation to other pages (About, Services, Contact).

2. **Seek Classes (`seek.html`):**
   - Select the desired day order from the dropdown menu.
   - Select the lunch hour from the dropdown menu.
   - Click the "Find Free Classes" button.
   - View the list of available free classes for the selected criteria.


## Contributors

- Surya KP ((https://github.com/SuryaKPog))
- Lakshaya K ((https://github.com/pixelpurfect))
