## This is a Material-UI Auto Top-up Component

Auto Top-up feature for your account. Never run out of credits. Setup Auto Top-up and we will auto-purchase credits for you.

### Getting Started

First, run the development server:

```bash

npm install

npm start
# or
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### How to Integration with React Application

-   Copy the `Components/Top-up.tsx` file to the `Components` folder of the React Application.

-   Copy the Material UI custom theme file `Components/theme/MUI-Theme.tsx` to the `theme` folder or file of the React Application.

-   If your React Application already has a Material UI custom `theme` file, then, copy individual components from `Components/theme/MUI-Theme.tsx` to that file.

-   Now, You can now utilize the Top-up component by directly importing `TopUp` from `Components/Top-up.tsx` in your React Application. Refer to <u>**lines 5 and 13**</u> of `App/page.tsx` for implementation guidance.
