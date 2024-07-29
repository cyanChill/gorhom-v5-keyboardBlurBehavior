> [!IMPORTANT]  
> **The bug turns out to be related to the keyboard input mode set to resize** (ie: `android_keyboardInputMode="adjustResize"`).
>
> This bug has been fixed in `5.0.0-alpha.11`.

# [v5-alpha.10] ~~Incorrect `keyboardBlurBehavior="restore"` Behavior~~

When you have `keyboardBlurBehavior="restore"` on the `<BottomSheet />`, you would expect the sheet to restore its position after the keyboard collapses (ie: sheet shifts back down), however, the sheet remains in place in `@gorhom/bottom-sheet@5.0.0-alpha.10` (expected behavior in `@gorhom/bottom-sheet@5.0.0-alpha.9`).

I used the `detached` prop to make it more visible.

<table>
  <tr>
    <th>v5.0.0-alpha.9</th>
    <th>v5.0.0-alpha.10</th>
  </tr>
  <tr>
    <td>
     <img src="./assets/v5-alpha9.gif" alt="Behavior of `keyboardBlurBehavior='restore'` in `@gorhom/bottom-sheet@5.0.0-alpha.9`." >
    </td>
    <td>
     <img src="./assets/v5-alpha10.gif" alt="Behavior of `keyboardBlurBehavior='restore'` in `@gorhom/bottom-sheet@5.0.0-alpha.10`." >
    </td>
  </tr>
</table>

# Getting Started

The examples were intialized with `pnpm create expo-app --template blank-typescript`.

1. Go to the directory you want to test (`v5-alpha9` or `v5-alpha10`). They both share the same code, but use a different version of `@gorhom/bottom-sheet`.

   ```
   cd v5-alpha10
   ```

2. Install dependencies.

   ```
   npm install
   ```

3. Start the app in Expo Go.

   ```
   npm run start
   ```
