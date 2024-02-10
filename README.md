<img src='https://github.com/mubashir-angathil/lotr-explorer/blob/master/public/thumbnail.png' height='450' width='100%'/>
LotR Explorer is a React-based web application that provides users with a comprehensive tool to explore the vast universe of J.R.R. Tolkien's Middle-earth. Leveraging The Lord of the Rings API, users can seamlessly search, filter, sort, and paginate through characters from the beloved fantasy series. Each character comes with detailed information, allowing fans to delve deeper into their favorite stories.

## Features

- Search characters by name
- Filter characters by race (multiple races can be selected)
- Filter characters by gender (Male/Female/Any)
- Sort characters by name (ascending/descending)
- Paginate through character results
- Limit number of characters per page (5/10/20/50)
- View detailed information about selected characters

## Getting Started

To get started with LotR Explorer, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/mubashir-angathil/lotr-explorer.git
```

2. Install dependencies:

```bash
cd lotr-explorer
npm install
```

3. Create a `.env.development` file in the root directory of the project and add the following configuration:

```
REACT_APP_ACCESS_TOKEN=your_access_token_here
REACT_APP_ENDPOINT=https://the-one-api.dev/v2/
```

Replace `your_access_token_here` with your actual API token obtained from The Lord of the Rings API.

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
