Kanban Board Application
This is a Kanban board application built using ReactJS and styled using pure CSS. The application interacts with the provided API endpoint to display and group tickets dynamically based on user selection. The goal is to allow users to group and sort tickets in various ways, offering an interactive experience.

Features
Group Tickets:

By Status: Group tickets based on their current status.
By User: Group tickets based on the assigned user.
By Priority: Group tickets based on their priority level.
Sort Tickets:

By Priority: Sort tickets in descending order based on their priority.
By Title: Sort tickets alphabetically by title.
State Persistence:

The user's current view state (grouping and sorting preferences) is saved locally and persists even after a page reload.
Priority Levels:

Urgent (Priority level 4)
High (Priority level 3)
Medium (Priority level 2)
Low (Priority level 1)
No priority (Priority level 0)
Usage
Click the "Display" button to select a grouping option:

By Status
By User
By Priority
Once grouped, you can sort the tickets either:

By Priority (descending)
By Title (ascending)
The current view (grouping and sorting) is saved automatically, so if you reload the page, your preferences will persist.

API Integration
The application communicates with the following API:
API URL:
https://api.quicksell.co/v1/internal/frontend-assignment

The API returns ticket data, including ticket ID, title, user, status, and priority level. These tickets are displayed on the Kanban board and can be grouped or sorted as per user interaction.

Priority Levels (From API)
4: Urgent
3: High
2: Medium
1: Low
0: No priority
Custom CSS
This project uses pure CSS for styling to ensure flexibility and responsiveness. No external CSS libraries such as Bootstrap or Tailwind are used. The design is similar to the provided screenshots and is fully responsive.

