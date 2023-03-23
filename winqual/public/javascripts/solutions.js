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
  var count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      count++;
      console.log(i, j, solution_list[i][j]);
    }
  }
  // prints the # of solutions through count
  console.log("Number of Solutions Found:", count, "\n");
}

function mystery_cation1() {
  // columns = # of cations
  return Math.floor(Math.random() * columns);
}

function mystery_cation2(cation1) {
  // columns = # of cations
  let new_cation2 = Math.floor(Math.random() * columns);
  if (new_cation2 === cation1) {
    return mystery_cation2(cation1);
  }
  return new_cation2;
}

function id_tostring(anion, cation) {
  let str = anion.toString() + cation.toString() + "";
  return str;
}

function find_img(Solution) {
  let img_file;
  const solImg = document.getElementById("solutionImg");

  switch (Solution.img_id) {
    case 0:
      img_file = "images/solutions_IMGS/0_colorless_clear.JPG";
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

// function to find specific solutions within the list
function find_one_cation_solution(anion, cation) {
  let in_bounds = new Boolean();
  in_bounds = anion >= 0 && anion < rows && cation >= 0 && cation < columns;

  // might want to return id (y+x, no spaces)

  if (!in_bounds) {
    console.log("ERROR: parameters out of bounds", "\n");
    return null;
  } else {
    console.log("Found Solution at", anion, cation);
    console.log(solution_list[anion][cation], "\n");
    return solution_list[anion][cation];
  }
}

function find_two_cation_solution(anion, cation1, cation2) {
  const final = new Solution("0", "0", "0", 0);

  let in_bounds = new Boolean();
  in_bounds =
    anion >= 0 &&
    anion < rows &&
    cation1 >= 0 &&
    cation1 < columns &&
    cation2 >= 0 &&
    cation2 < columns;

  if (!in_bounds) {
    console.log("ERROR: parameters out of bounds", "\n");
    return null;
  }

  /** STEP 1: COLOR */

  // if both are the same color -> return shared color
  if (
    solution_list[anion][cation1].color === solution_list[anion][cation2].color
  ) {
    final.color = solution_list[anion][cation1].color;
  }

  // if solution 1 IS NOT colorless...
  else if (solution_list[anion][cation1].color != "Colorless") {
    // if both are different, non-colorless colors -> return ??? color
    if (solution_list[anion][cation2].color != "Colorless") {
      final.color = "???";
    }

    // if solution 1 IS NOT colorless, but solution 2 IS -> return solution 1 color
    else final.color = solution_list[anion][cation1].color;
  }

  // if solution 1 IS colorless...
  else if (solution_list[anion][cation1].color === "Colorless") {
    // if solution 1 IS colorless, but solution 2 IS NOT -> return solution 2 color
    if (solution_list[anion][cation2].color != "Colorless") {
      final.color = solution_list[anion][cation2].color;
    }

    // if both are colorless -> return colorless
    else final.color = "Colorless";
  }

  /** -------------------------------------------------------------------------------------
   *  STEP 2: OPACITY */

  if (
    solution_list[anion][cation1].opacity === "Clear" &&
    solution_list[anion][cation2].opacity === "Clear"
  ) {
    final.opacity = "Clear";
  } else final.opacity = "Ppt.";

  /** -------------------------------------------------------------------------------------
   *  STEP 3: IMG_ID */

  switch (final.color) {
    case "Colorless":
      final.img_id = 0;
      break;

    case "Purple":
      final.img_id = 1;
      break;

    case "Green":
      if (final.opacity == "Clear") {
        final.img_id = 2;
      } else {
        final.img_id = 6;
      }
      break;

    case "White":
      final.img_id = 3;
      break;

    case "Orange":
      final.img_id = 4;
      break;

    case "Cream":
      final.img_id = 5;
      break;

    case "Brown":
      final.img_id = 7;
      break;

    case "Blue":
      final.img_id = 8;
      break;

    case "???":
      final.img_id = 9;
      break;

    default:
      console.log("ERROR: Invalid Img ID");
      break;
  }

  console.log("Inputted Compounds:", anion, cation1, cation2);
  console.log("Output 2C Solution:", final);
  return final;
}

function show_mixture() {
  const cationIds = [
    "C0_copy",
    "C1_copy",
    "C2_copy",
    "C3_copy",
    "C4_copy",
    "C5_copy",
    "M1_copy",
    "M2_copy",
  ];
  const anionIds = ["A0_copy", "A1_copy", "A2_copy", "A3_copy", "A4_copy"];
  const cationParent = document.getElementById("cation");
  const anionParent = document.getElementById("anion");

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
    } else if (cationImg == null) {
      cation += 1;
      console.log(`Element with ID "${id}" not found`);
      if (cation == 7) {
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
    } else if (anionImg == null) {
      anion += 1;
      console.log(`Element with ID "${id}" not found`);
      if (anion == 4) {
        anion = -1;
      }
    }
  }

   //alert("Cation " + cation + " Anion: " + anion);

  //find solution
  //import function from solutions.js?

  const solution = find_one_cation_solution(anion, cation);
  console.log(solution);

  const solutionImg = find_img(solution);
}

// test prints for array + finding solutions
//print_list();
//find_one_cation_solution(4, 3);
//find_one_cation_solution(8, 1);

//find_two_cation_solution(0, 0, 3);
//find_two_cation_solution(1, 2, 5);
//find_two_cation_solution(0, 0, 0);
//find_two_cation_solution(2, 4, 5);
//find_two_cation_solution(5, 4, 1);

// all below should be out of bounds
//find_two_cation_solution(7, 1, 2);
//find_two_cation_solution(6, 6, 1);
//find_two_cation_solution(3, 2, 8);

// testing random var for cations
find_one_cation_solution(3, mystery_cation1());
find_two_cation_solution(
  2,
  mystery_cation1(),
  mystery_cation2(mystery_cation1())
);
