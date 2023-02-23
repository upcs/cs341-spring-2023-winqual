
function Solution(color, opacity, formula) {
    //this.id     = id;
    this.color      = color;
    this.opacity    = opacity;
    this.formula    = formula;
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

// define the size of 2d array based on cations + anions
const rows = 5;
const columns = 6;

// create the 2d array + temp object
const solution_list = new Array(rows);
const temp = new Solution("0", "0", "0");

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
solution_list[0][0] = new Solution( "Colorless",    "Clear",    null        );
solution_list[0][1] = new Solution( "Colorless",    "Clear",    null        );
solution_list[0][2] = new Solution( "Colorless",    "Clear",    null        );
solution_list[0][3] = new Solution( "Purple"   ,    "Clear",    null        );
solution_list[0][4] = new Solution( "Green"    ,    "Clear",    null        );
solution_list[0][5] = new Solution( "Colorless",    "Clear",    null        );

// Anion: Cl- (1)
solution_list[1][0] = new Solution( "Colorless",    "Clear",    null        );
solution_list[1][1] = new Solution( "Colorless",    "Clear",    null        );
solution_list[1][2] = new Solution( "White"    ,    "Ppt." ,    "PbCl2"     );
solution_list[1][3] = new Solution( "Purple"   ,    "Clear",    null        );
solution_list[1][4] = new Solution( "Green"    ,    "Clear",    null        );
solution_list[1][5] = new Solution( "White"    ,    "Ppt." ,    "AgCl"      );

// Anion: I- (2)
solution_list[2][0] = new Solution( "Colorless",    "Clear",    null        );
solution_list[2][1] = new Solution( "Colorless",    "Clear",    null        );
solution_list[2][2] = new Solution( "Orange"   ,    "Ppt." ,    "Pbl2"      );
solution_list[2][3] = new Solution( "Purple"   ,    "Clear",    null        );
solution_list[2][4] = new Solution( "Green"    ,    "Clear",    null        );
solution_list[2][5] = new Solution( "Cream"    ,    "Ppt." ,    "Agl"       );

// Anion: OH- (3) 
solution_list[3][0] = new Solution( "White"    ,    "Ppt." ,    "Mg(OH)2"   );
solution_list[3][1] = new Solution( "White"    ,    "Ppt." ,    "Zn(OH)2"   );
solution_list[3][2] = new Solution( "White"    ,    "Ppt." ,    "Pb(OH)2"   );
solution_list[3][3] = new Solution( "White"    ,    "Ppt." ,    "Cr(OH)3"   );
solution_list[3][4] = new Solution( "Green"    ,    "Ppt." ,    "Ni(OH)2"   );
solution_list[3][5] = new Solution( "Brown"    ,    "Ppt." ,    "AgOH"      );

// Anion: OH-xs (4)
solution_list[4][0] = new Solution( "White"    ,    "Ppt." ,    "Mg(OH)2"   );
solution_list[4][1] = new Solution( "Colorless",    "Clear",    "Zn(OH)42-" );
solution_list[4][2] = new Solution( "Colorless",    "Clear",    "Pb(OH)42-" );
solution_list[4][3] = new Solution( "Green"    ,    "Clear",    "Cr(OH)4-"  );
solution_list[4][4] = new Solution( "Green"    ,    "Ppt." ,    "Ni(OH)2"   );
solution_list[4][5] = new Solution( "Brown"    ,    "Ppt." ,    "AgOH"      );

// Anion: NH4OH (5)
solution_list[5][0] = new Solution( "White"    ,    "Ppt." ,    "Mg(OH)2"   );
solution_list[5][1] = new Solution( "Colorless",    "Clear",    "Zn(NH3)42+");
solution_list[5][2] = new Solution( "White"    ,    "Ppt." ,    "Pb(OH)2"   );
solution_list[5][3] = new Solution( "White"    ,    "Ppt." ,    "Cr(OH)3"   );
solution_list[5][4] = new Solution( "Blue"     ,    "Clear",    "Ni(NH3)62+");
solution_list[5][5] = new Solution( "Colorless",    "Clear",    "Ag(NH3)+"  );

// Anion: SO42- (6)
solution_list[6][0] = new Solution( "Colorless",    "Clear",    null        );
solution_list[6][1] = new Solution( "Colorless",    "Clear",    null        );
solution_list[6][2] = new Solution( "White"    ,    "Ppt." ,    "PbSO4"     );
solution_list[6][3] = new Solution( "Purple"   ,    "Clear",    null        );
solution_list[6][4] = new Solution( "Green"    ,    "Clear",    null        );
solution_list[6][5] = new Solution( "Colorless",    "Clear",    null        );