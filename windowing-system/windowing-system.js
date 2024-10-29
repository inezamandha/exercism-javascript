// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// Define the Size class with width and height properties.
export class Size {
  /**
   * Constructor for Size class
   * @param {number} width - Initial width of the size (default 80)
   * @param {number} height - Initial height of the size (default 60)
   */
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  /**
   * Method to resize width and height properties
   * @param {number} newWidth - New width for resizing
   * @param {number} newHeight - New height for resizing
   */
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

// Define the Position class with x and y properties.
export class Position {
  /**
   * Constructor for Position class
   * @param {number} x - Initial x-coordinate (default 0)
   * @param {number} y - Initial y-coordinate (default 0)
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Method to move to a new x and y coordinate
   * @param {number} newX - New x-coordinate for the position
   * @param {number} newY - New y-coordinate for the position
   */
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

// Define the ProgramWindow class with screenSize, size, and position properties.
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600); // Fixed screen size for the window's display area
    this.size = new Size(); // Initial size with default width and height
    this.position = new Position(); // Initial position with default x and y coordinates
  }

  /**
   * Resize method that sets the window to a new size, keeping it within screen bounds
   * @param {Size} newSize - The desired new size for the window
   */
  resize(newSize) {
    // Calculate the maximum allowable width and height, given the current position
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    // Enforce minimum width/height of 1 and maximum based on screen limits
    this.size.width = Math.min(Math.max(newSize.width, 1), maxWidth);
    this.size.height = Math.min(Math.max(newSize.height, 1), maxHeight);
  }

  /**
   * Move method that repositions the window within screen boundaries
   * @param {Position} newPosition - The new position to move the window to
   */
  move(newPosition) {
    // Calculate the maximum allowable position based on window size
    const maxPositionX = this.screenSize.width - this.size.width;
    const maxPositionY = this.screenSize.height - this.size.height;

    // Ensure the position stays within screen boundaries
    this.position.x = Math.min(Math.max(newPosition.x, 0), maxPositionX);
    this.position.y = Math.min(Math.max(newPosition.y, 0), maxPositionY);
  }
}

/**
 * Adjust the ProgramWindow to a specific size and position
 * @param {ProgramWindow} programWindow - The window to adjust
 * @returns {ProgramWindow} - The modified window instance
 */
export function changeWindow(programWindow) {
  // Move to the top-left corner first so it can always resize
  programWindow.move(new Position());

  // Set the window size to width = 400, height = 300
  programWindow.resize(new Size(400, 300));

  // Set the window position to x = 100, y = 150
  programWindow.move(new Position(100, 150));

  return programWindow;
}
