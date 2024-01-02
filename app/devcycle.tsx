import { setupDevCycle } from '@devcycle/nextjs-sdk/server';

const { getVariableValue, getClientContext } = setupDevCycle(
  // SDK Key. This will be public and sent to the client, so you MUST use the client SDK key.
  process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
  // User data getter. Provide a function that resolves to the user relevant to the current request. You can use
  // Next APIs such as `headers()` and `cookies()` here.
  async () => {
    // pseudocode function representing some call you might make to your code to determine the current user
    return { user_id: 'test-user' };
  },
);

export { getVariableValue, getClientContext };
