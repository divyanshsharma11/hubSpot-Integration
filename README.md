# HubSpot Integration with Node.js

This project demonstrates a Node.js application that integrates with HubSpot CRM creating contacts, storing them in MongoDB and HubSpot, and sending email notifications.

## Features

- **Fetching Contacts**: Retrieves contact information from HubSpot periodically or on-demand.
- **Saving to Database**: Stores retrieved data in MongoDB for persistence.
- **Email Notifications**: Sends personalized welcome emails to new contacts.
- **Two-Way Sync (Optional)**: Establishes a bi-directional flow of data between your application and HubSpot.
- **Conditional Notes (Optional)**: Adds notes to HubSpot contacts based on criteria such as email domain.

## Prerequisites

Before running the application, ensure you have the following installed/setup:

- Node.js and npm (or yarn) installed on your system.
- A HubSpot developer account with API access.
- A MongoDB database instance.
- An email account for sending notifications.

## Installation

Clone this repository:

```bash
git clone https://github.com/divyanshsharma11/hubSpot-Integration.git
cd HubSpot-Integration
```
