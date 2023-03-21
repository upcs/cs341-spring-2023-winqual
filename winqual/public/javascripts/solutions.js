/**
 * Author(s): Chase Ohmstede
 * Date: 2/21/2023
 */

function Solution(color, opacity, formula, img_id) {
  //this.id     = id;
  this.color = color;
  this.opacity = opacity;
  this.formula = formula;
  this.img_id = img_id;
}

/**
 * Cation (columns) Int Table   |   Anion (rows) Int Table
 * 0: Mg2+                      |   0: NO3-
 * 1: Zn2+                      |   1: Cl-
 * 2: Pb2+                      |   2: I-
 * 3: Cr3+                      |   3: OH-
 * 4: Ni2+                      |   4: OH- (xs)
 * 5: Ag+                       |   5: NH4OH (Ammonia)
 *                              |   6: SO42-
 */

/**
 * Solution IMG Id Table
 * 0: 0_colorless_clear
 * 1: 1_purple_clear
 * 2: 2_green_clear
 * 3: 3_white_ppt
 * 4: 4_orange_ppt
 * 5: 5_cream_ppt
 * 6: 6_green_ppt
 * 7: 7_brown_ppt
 * 8: 8_blue_clear
 */

// define the size of 2d array based on cations + anions
const rows = 7; //anions
const columns = 6; //cations

// create the 2d array + temp object
const solution_list = new Array(rows);
const temp = new Solution("0", "0", "0", 0);

// fill the 2d array with temp objects
for (let i = 0; i < rows; i++) {
  solution_list[i] = new Array(columns);
  for (let j = 0; j < columns; j++) {
    solution_list[i][j] = temp;
  }
}

/**
 * below is every Solution combo hard coded (this feels wrong)
 * also just for 2-compound solutions
 */

// Anion: NO3- (0)
solution_list[0][0] = new Solution("Colorless", "Clear", "None", 0);
solution_list[0][1] = new Solution("Colorless", "Clear", "None", 0);
solution_list[0][2] = new Solution("Colorless", "Clear", "None", 0);
solution_list[0][3] = new Solution("Purple", "Clear", "None", 1);
solution_list[0][4] = new Solution("Green", "Clear", "None", 2);
solution_list[0][5] = new Solution("Colorless", "Clear", "None", 0);

// Anion: Cl- (1)
solution_list[1][0] = new Solution("Colorless", "Clear", "None", 0);
solution_list[1][1] = new Solution("Colorless", "Clear", "None", 0);
solution_list[1][2] = new Solution("White", "Ppt.", "PbCl2", 3);
solution_list[1][3] = new Solution("Purple", "Clear", "None", 1);
solution_list[1][4] = new Solution("Green", "Clear", "None", 2);
solution_list[1][5] = new Solution("White", "Ppt.", "AgCl", 3);

// Anion: I- (2)
solution_list[2][0] = new Solution("Colorless", "Clear", "None", 0);
solution_list[2][1] = new Solution("Colorless", "Clear", "None", 0);
solution_list[2][2] = new Solution("Orange", "Ppt.", "Pbl2", 4);
solution_list[2][3] = new Solution("Purple", "Clear", "None", 1);
solution_list[2][4] = new Solution("Green", "Clear", "None", 2);
solution_list[2][5] = new Solution("Cream", "Ppt.", "Agl", 5);

// Anion: OH- (3)
solution_list[3][0] = new Solution("White", "Ppt.", "Mg(OH)2", 3);
solution_list[3][1] = new Solution("White", "Ppt.", "Zn(OH)2", 3);
solution_list[3][2] = new Solution("White", "Ppt.", "Pb(OH)2", 3);
solution_list[3][3] = new Solution("White", "Ppt.", "Cr(OH)3", 3);
solution_list[3][4] = new Solution("Green", "Ppt.", "Ni(OH)2", 6);
solution_list[3][5] = new Solution("Brown", "Ppt.", "AgOH", 7);

// Anion: OH-xs (4)
solution_list[4][0] = new Solution("White", "Ppt.", "Mg(OH)2", 3);
solution_list[4][1] = new Solution("Colorless", "Clear", "Zn(OH)42-", 0);
solution_list[4][2] = new Solution("Colorless", "Clear", "Pb(OH)42-", 0);
solution_list[4][3] = new Solution("Green", "Clear", "Cr(OH)4-", 2);
solution_list[4][4] = new Solution("Green", "Ppt.", "Ni(OH)2", 6);
solution_list[4][5] = new Solution("Brown", "Ppt.", "AgOH", 7);

// Anion: NH4OH (5)
solution_list[5][0] = new Solution("White", "Ppt.", "Mg(OH)2", 3);
solution_list[5][1] = new Solution("Colorless", "Clear", "Zn(NH3)42+", 0);
solution_list[5][2] = new Solution("White", "Ppt.", "Pb(OH)2", 3);
solution_list[5][3] = new Solution("White", "Ppt.", "Cr(OH)3", 3);
solution_list[5][4] = new Solution("Blue", "Clear", "Ni(NH3)62+", 8);
solution_list[5][5] = new Solution("Colorless", "Clear", "Ag(NH3)+", 0);

// Anion: SO42- (6)
solution_list[6][0] = new Solution("Colorless", "Clear", "None", 0);
solution_list[6][1] = new Solution("Colorless", "Clear", "None", 0);
solution_list[6][2] = new Solution("White", "Ppt.", "PbSO4", 3);
solution_list[6][3] = new Solution("Purple", "Clear", "None", 1);
solution_list[6][4] = new Solution("Green", "Clear", "None", 2);
solution_list[6][5] = new Solution("Colorless", "Clear", "None", 0);

// just here to print the contents of the list
function print_list() {
  var cntr = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      cntr++;
      console.log(i, j, solution_list[i][j]);
    }
  }
  // prints the # of solutions through cntr
  console.log("Number of Solutions Found:", cntr, "\n");
}

// function to find specific solutions within the list
function find_solution(y, x) {
  let in_bounds = new Boolean();
  in_bounds = y >= 0 && y < rows && x >= 0 && x < columns;

  // might want to return id (y+x, no spaces)

  if (!in_bounds) {
    console.log("ERROR: parameters out of bounds", "\n");
    return null;
  } else {
    console.log("Found Solution at", y, x);
    console.log(solution_list[y][x], "\n");
    return solution_list[y][x];
  }
}

function id_tostring(x, y) {
  let str = x.toString() + y.toString() + "";
  return str;
}

function find_img(Solution) {
  let img_file;
  const solImg = document.getElementById('solutionImg');

  switch (Solution.img_id) {
    case 0:
      img_file = "images/solutions_IMGS/0_clear_colorless.JPG";
      break;

    case 1:
      img_file = "images/solutions_IMGS/1_purple_clear.JPG";
      break;

    case 2:
      img_file = "images/solutions_IMGS/2_green_clear.JPG";
      break;

    case 3:
      img_file = "images/solutions_IMGS/3_white_ppt.JPG";
      break;

    case 4:
      img_file = "images/solutions_IMGS/4_orange_ppt.JPG";
      break;

    case 5:
      img_file = "images/solutions_IMGS/5_cream_ppt.JPG";
      break;

    case 6:
      img_file = "images/solutions_IMGS/6_green_ppt.JPG";
      break;

    case 7:
      img_file = "images/solutions_IMGS/7_brown_ppt.JPG";
      break;

    case 8:
      img_file = "images/solutions_IMGS/8_blue_clear.JPG";
      break;

    default:
      console.log("ERROR: Invalid Img ID");
      break;
  }

  solImg.src = img_file;

  console.log("Solution Img:", Solution.img_id, img_file);
  return img_file;
}

function show_mixture() {
  
  // console.log("You have clicked on: solutionButton");
  const cationIds = ["C0", "C1", "C2", "C3", "C4", "C5", "mystery1", "mystery2"];
  const anionIds = ["A0", "A1", "A2", "A3", "A4"];
  const cationParent = document.getElementById('cation');
  const anionParent = document.getElementById('anion');

   
  //debugging
  console.log(cationParent);
  console.log(anionParent);
  console.dir(cationParent);
  console.dir(anionParent);

  //vars for find_solution function
  let cation = -1;
  let anion = -1;
  
for (const id of cationIds) {
    const cationImg = cationParent.querySelector(`#${id}`);
    if (cationImg !== null) {
    //debugging
    console.log(cationImg);
    console.dir(cationImg);

    cation += 1;
    break;
    }
  
    else if (cationImg == null) {
    cation += 1;
    console.log(`Element with ID "${id}" not found`);
    if (cation == 7){
      cation = -1;
    }
  }
 }

for (const id of anionIds) {
    const anionImg = anionParent.querySelector(`#${id}`);
    if (anionImg !== null) {
    //debugging
    console.log(anionImg);
    console.dir(anionImg);

    anion += 1;
    break;
    }
  
    else if (anionImg == null) {
    anion += 1;
    console.log(`Element with ID "${id}" not found`);
    if (anion == 4){
      anion = -1;
    }
  }
 }


  alert("Cation " + cation + " Anion: " + anion);

  //find solution
  //import function from solutions.js?
  
  const solution = find_solution(cation, anion);
  console.log(solution);

  const solutionImg = find_img(solution)
}


// test prints for array + finding solutions
print_list();
find_solution(4, 3);
find_solution(8, 1);
