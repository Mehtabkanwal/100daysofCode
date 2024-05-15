/*************
 * DEBUGGING *
 *************/

let age: number= 22;
if (age > 20) {
  console.log("pass");
} else if (age < 20) {
  console.log("return");
} else {
  console.log("reboot");
}

//Step 1: Enable Source Maps in tsconfig.json
// What is a source map? It's a file that helps the debugger understand which TypeScript line corresponds to which JavaScript line after your code is compiled.

// How to enable it: Open your tsconfig.json file and add "sourceMap": true in the compilerOptions section.
// Step 2: Recompile Your Code
// Recompile your project: After you save the changes in tsconfig.json, recompile your TypeScript code. This can be done by running tsc in your terminal.
// Check for source map files: You'll see new .js.map files in your folder, like index.js.map.
// Step 3: Add Breakpoints
// What is a breakpoint? It's a spot where the code will pause during execution so you can inspect what's happening.
// How to add a breakpoint: Open your TypeScript file (e.g., index.ts) and click on the line number where you want to pause. A red dot will appear, indicating a breakpoint.
// Step 4: Configure Debugging with launch.json
// Open the debug panel: Click the debug icon on the left sidebar in VS Code.

// Create a launch configuration: Click the gear icon and select Node.js. This creates a launch.json file, which tells VS Code how to run and debug your code.
// Step 5: Set Up Pre-Launch Task
// Pre-launch task: This tells VS Code to compile your TypeScript code before starting the debugging session.
// Step 6: Start Debugging
// Go back to your code: Open index.ts.
// Start debugging: Click the green play button in the debug panel or press F5.
// Step 7: Debugging Tools
// Step Over (F10): Executes the next line of code.
// Step Into (F11): Steps into functions to see what's happening inside.
// Step Out (Shift+F11): Steps out of the current function.
// Restart (Ctrl+Shift+F5): Restarts the debugging session.
// Stop (Shift+F5): Stops debugging.
// Step 8: Inspect Variables
// Variables panel: On the left, you'll see a list of variables. You can see their values and how they change as you step through your code.
// Watch window: Add specific variables to watch their values closely.
// Step 9: Use console.log
// Add a console.log statement: This can help you see what's happening in your code.
// Run the debugger: Start the debugging session and use F10 to step through the lines and see your console.log output.

// Step 10: Stop Debugging
// Finish your session: When you're done, simply stop the debugging session by clicking the stop button or pressing Shift+F5.
// Summary
// Enable source maps in tsconfig.json.
// Recompile your code.
// Add breakpoints in your TypeScript files.
// Configure debugging in launch.json.
// Set up pre-launch tasks.
// Start the debugging session.
// Use debugging tools to step through the code.
// Inspect variables to understand their values.
// Use console.log for additional insights.
// Stop the debugging session when done.
// Debugging helps you find and fix issues by letting you see exactly what your code is doing at each step.






