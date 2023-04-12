# cs341-spring-2023-winqual

WinQual 2.0 Application Development
  
Created by: Margo Brown, Selena Li, Thomas Kone, Emily Do, and Chase Ohmstede

Link to Webpage: https://upcs.github.io/cs341-spring-2023-winqual/winqual/public/index.html#

# Acceptance Test

Test Case: Removing and item from a dropbox

Description: The user drags a anion and/or cation to the trash can icon to delete the item.

### Test Steps: 
  1. Open the web page.
  2. Click and hold on an image to drag it.
  3. Drag the image to its corresponding dropbox (either cation or anion) and let go of mouse.
     - Or drag the image directly onto the trash can icon. 
  4. Drag the image onto the trash can icon.
  
### Expected Results:
  1. The web page should open and display the main page.
  2. The image should be able to move in correspondence to the mouse. 
  3. The image should be fit into the box that it is placed at.
     - The image should disappear.
  4. The image should disappear.

If all expected results are met, the acceptance test is considered successful.

# Completed Features

**1. Drag and drop**
   - Click and hold on an image to drag to its corresponding box (cation or anion).
     
**2. Check Solution button**
  - If a "1 Mystery Cation" is placed into the cation box, after experimenting with various anions to figure out what Cation it is, click this button. A popup will open up with 6 options of what the Mystery Cation may be. If selected correctly, the box will highlight green and red if not.

**3. Show Mixture button**
  - After at least 1 image is placed into each box, click this button to see its final mixture in the larger box below.

**4. Reset Unknown button**
  - To reset all placed images on the webpage, click this button to clear the page and start over.

**5. Help button**
  - Isolates each component of the webpage to explain what each does.

**6. Trash**
  - Drag unwanted images over the trash icon to delete.
