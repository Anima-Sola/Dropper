//Фигура представляет собой объект состоящий из двухмерного массива 3х5 и строки определяющей цвет
var figure = []; //Массив объектов фигур

//Стандартные фигуры тетриса

figure[0] = {
	look: [ [1,1,1,1]],								// Это фигура
	color: "#FFFF33",								// ****
	v_pos_corr: 2,
	g_pos_corr: -2
}

figure[1] = {
	look: [ [1,0,0], [1,1,1] ],						// Это фигура
	color: "#CC9900",
	v_pos_corr: 0,
	g_pos_corr: 0									// *
}													// *** 

figure[2] = {
	look: [ [0,0,1], [1,1,1] ],						// Это фигура
	color: "#CC6600",
	v_pos_corr: 0,
	g_pos_corr: 0									//   *
}													// ***

figure[3] = {
	look: [ [1,1], [1,1] ],							// Это фигура
	color: "#CC6633",
	v_pos_corr: 0,
	g_pos_corr: 0									// **
}													// **

figure[4] = {
	look: [ [0,1,1], [1,1,0] ],						// Это фигура
	color: "#FF0000",
	v_pos_corr: 1,
	g_pos_corr: -1									//  **
}													// **

figure[5] = {
	look: [ [0,1,0], [1,1,1] ],						// Это фигура
	color: "#FF3333",
	v_pos_corr: 0,
	g_pos_corr: 0									//  *
}													// ***

figure[6] = {
	look: [ [1,1,0], [0,1,1] ],						// Это фигура
	color: "#993333",
	v_pos_corr: 1,
	g_pos_corr: 0									//  **
}													//	 **

//Фигуры усложненного варианта
figure[7] = {
	look: [ [1,1,1,1,1]],							// Это фигура
	color: "#CC3366",
	v_pos_corr: 2,
	g_pos_corr: -2									// *****
}	

figure[8] = {										//Это фигура
	look: [ [0,0,1], [1,1,1], [1,0,0] ],			//   *
	color: "#CC0066",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[9] = {										//Это фигура
	look: [ [0,1,1], [1,1,0], [1,0,0] ],			//  **
	color: "#CC6699",								// **
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[10] = {										//Это фигура
	look: [ [0,1,0], [1,1,1], [1,0,0] ],			//  *
	color: "#FF33FF",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}										

figure[11] = {										//Это фигура
	look: [ [1,1,1,1], [0,0,1,0] ],					// ****
	color: "#CC33CC",								//   *
	v_pos_corr: 1,								
	g_pos_corr: -2							
}																
	
figure[12] = {										//Это фигура
	look: [ [1,1,1,0], [0,0,1,1] ],					// ***
	color: "#9900CC",								//   **
	v_pos_corr: 1,								
	g_pos_corr: -2
}																

figure[13] = {										//Это фигура
	look: [ [1,1,1], [0,0,1], [0,0,1] ],			// ***
	color: "#9900FF",								//   *
	v_pos_corr: 0,									//	 *
	g_pos_corr: 0									
}																
	
figure[14] = {										//Это фигура
	look: [ [1,1,1], [1,1,0] ],						// ***
	color: "#6633CC",								// **
	v_pos_corr: 1,								
	g_pos_corr: -1									
}																	 

figure[15] = {										//Это фигура
	look: [ [1,1,1,1], [0,1,0,0] ],					// ****
	color: "#6600FF",								//  *
	v_pos_corr: 2,								
	g_pos_corr: -1								
}																 	

figure[16] = {										//Это фигура
	look: [ [1,1,1,1], [0,0,0,1] ],					// ****
	color: "#666699",								//    *
	v_pos_corr: 1,								
	g_pos_corr: -2								
}																

figure[17] = {										//Это фигура
	look: [ [1,1,1], [0,1,1] ],						// ***
	color: "#3333CC",								//  **
	v_pos_corr: 1,								
	g_pos_corr: -1									
}																

figure[18] = {										//Это фигура
	look: [ [1,1,1], [0,1,0], [0,1,0] ],			// ***
	color: "#0000CC",								//  *
	v_pos_corr: 0,									//  *
	g_pos_corr: 0									
}																

figure[19] = {										//Это фигура
	look: [ [1,1,1], [1,0,1] ],						// ***
	color: "#0033FF",								// * *
	v_pos_corr: 1,								
	g_pos_corr: -1									
}																 	

figure[20] = {										//Это фигура
	look: [ [1,1,1,1], [1,0,0,0] ],					// ****
	color: "#3399CC",								// *
	v_pos_corr: 2,								
	g_pos_corr: -1									 
}																	

figure[21] = {										//Это фигура
	look: [ [0,1,0], [1,1,1], [0,1,0] ],			//  *
	color: "#669999",								// ***
	v_pos_corr: 0,									//  *			
	g_pos_corr: 0						
}																

figure[22] = {										//Это фигура
	look: [ [1,0,0], [1,1,1], [0,0,1] ],			// *
	color: "#33FFFF",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0
}																

figure[23] = {										//Это фигура
	look: [ [0,1,0], [1,1,1], [0,0,1] ],			//  *
	color: "#00FFCC",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0									
}																

figure[24] = {										//Это фигура
	look: [ [0,1,1,1], [1,1,0,0] ],					//  ***
	color: "#339966",								// **
	v_pos_corr: 2,												
	g_pos_corr: -1									
}																   

//Фигуры 0-6 повернутые на 90 градусов

figure[25] = {
	look: [ [1], [1], [1], [1]],			//****
	color: "#FFFF33",
	v_pos_corr: -2,
	g_pos_corr: 2	
}

figure[26] = {
	look: [ [1,1], [1,0], [1,0] ],
	color: "#CC9900",
	v_pos_corr: 0,
	g_pos_corr: 1							// *
}											// *** 

figure[27] = {
	look: [ [1,0], [1,0], [1,1] ],
	color: "#CC6600",
	v_pos_corr: 0,
	g_pos_corr: 1							//   *
}											// ***

figure[28] = {
	look: [ [1,1], [1,1] ],							
	color: "#CC6633",
	v_pos_corr: 0,
	g_pos_corr: 0							// **
}											// **

figure[29] = {
	look: [ [1,0], [1,1], [0,1] ],
	color: "#FF0000",
	v_pos_corr: -1,
	g_pos_corr: 1							//  **
}											// **

figure[30] = {
	look: [ [1,0], [1,1], [1,0] ],
	color: "#FF3333",
	v_pos_corr: 0,
	g_pos_corr: 1							//  *
}											// ***

figure[31] = {
	look: [ [0,1], [1,1], [1,0] ],
	color: "#993333",
	v_pos_corr: -1,
	g_pos_corr: 0							//  **
}											//   **


//Фигуры усложненного варианта повернутые на 90 град
figure[32] = {
	look: [ [1], [1], [1], [1], [1] ],				// *****
	color: "#CC3366",
	v_pos_corr: -2,
	g_pos_corr: 2								
}	

figure[33] = {										
	look: [ [1,1,0], [0,1,0], [0,1,1] ],			//   *
	color: "#CC0066",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[34] = {										
	look: [ [1,1,0], [0,1,1], [0,0,1] ],			//  **
	color: "#CC6699",								// **
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[35] = {										
	look: [ [1,1,0], [0,1,1], [0,1,0] ],			//  *
	color: "#FF33FF",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}										

figure[36] = {										
	look: [ [0,1], [0,1], [1,1], [0,1] ],			// ****
	color: "#CC33CC",								//   *
	v_pos_corr: -2,								
	g_pos_corr: 1							
}																
	
figure[37] = {										
	look: [ [0,1], [0,1], [1,1], [1,0] ],			// ***
	color: "#9900CC",								//   **
	v_pos_corr: -2,								
	g_pos_corr: 1
}																

figure[38] = {										
	look: [ [0,0,1], [0,0,1], [1,1,1] ],			// ***
	color: "#9900FF",								//   *
	v_pos_corr: 0,									//	 *
	g_pos_corr: 0									
}																
	
figure[39] = {										
	look: [ [1,1], [1,1],[0,1] ],					// ***
	color: "#6633CC",								// **
	v_pos_corr: -1,								
	g_pos_corr: 0									
}																	 

figure[40] = {										
	look: [ [0,1], [1,1], [0,1], [0,1] ],			// ****
	color: "#6600FF",								//  *
	v_pos_corr: -1,								
	g_pos_corr: 0								
}																 	

figure[41] = {										
	look: [ [0,1], [0,1], [0,1], [1,1] ],			// ****
	color: "#666699",								//    *
	v_pos_corr: -2,								
	g_pos_corr: 1								
}																

figure[42] = {										
	look: [ [0,1], [1,1], [1,1] ],					// ***
	color: "#3333CC",								//  **
	v_pos_corr: -1,								
	g_pos_corr: 0									
}																

figure[43] = {										
	look: [ [0,0,1], [1,1,1], [0,0,1] ],			// ***
	color: "#0000CC",								//  *
	v_pos_corr: 0,									//  *
	g_pos_corr: 0									
}																

figure[44] = {										
	look: [ [1,1], [0,1], [1,1] ],					// ***
	color: "#0033FF",								// * *
	v_pos_corr: -1,								
	g_pos_corr: 0									
}																 	

figure[45] = {										
	look: [ [1,1], [0,1], [0,1], [0,1] ],			// ****
	color: "#3399CC",								// *
	v_pos_corr: -1,								
	g_pos_corr: 0									 
}																	

figure[46] = {										
	look: [ [0,1,0], [1,1,1], [0,1,0] ],			//  *
	color: "#669999",								// ***
	v_pos_corr: 0,									//  *			
	g_pos_corr: 0						
}																

figure[47] = {										
	look: [ [0,1,1], [0,1,0], [1,1,0] ],			// *
	color: "#33FFFF",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0
}																

figure[48] = {										
	look: [ [0,1,0], [0,1,1], [1,1,0] ],			//  *
	color: "#00FFCC",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0									
}																

figure[49] = {										
	look: [ [1,0], [1,1], [0,1], [0,1] ],			//  ***
	color: "#339966",								// **
	v_pos_corr: -1,												
	g_pos_corr: 0									
}																   

//Фигуры 0-6 повернутые на 180 градусов

figure[50] = {
	look: [ [1, 1, 1, 1] ],					//****
	color: "#FFFF33",
	v_pos_corr: 2,
	g_pos_corr: -2	
}

figure[51] = {
	look: [ [1,1,1], [0,0,1] ],
	color: "#CC9900",
	v_pos_corr: 1,
	g_pos_corr: -1							// *
}											// *** 

figure[52] = {
	look: [ [1,1,1], [1,0,0] ],
	color: "#CC6600",
	v_pos_corr: 1,
	g_pos_corr: -1							//   *
}											// ***

figure[53] = {
	look: [ [1,1], [1,1] ],							
	color: "#CC6633",
	v_pos_corr: 0,
	g_pos_corr: 0							// **
}											// **

figure[54] = {
	look: [ [0,1,1], [1,1,0] ],
	color: "#FF0000",
	v_pos_corr: 1,
	g_pos_corr: -1							//  **
}											// **

figure[55] = {
	look: [ [1,1,1], [0,1,0] ],
	color: "#FF3333",
	v_pos_corr: 1,
	g_pos_corr: -1							//  *
}											// ***

figure[56] = {
	look: [ [1,1,0], [0,1,1] ],
	color: "#993333",
	v_pos_corr: 1,
	g_pos_corr: 0							//  **
}											//   **														//   

//Фигуры усложненного варианта повернутые на 180 град
figure[57] = {
	look: [ [1,1,1,1,1]],							// *****
	color: "#CC3366",
	v_pos_corr: 2,
	g_pos_corr: -2									
}	

figure[58] = {										
	look: [ [0,0,1], [1,1,1], [1,0,0] ],			//   *
	color: "#CC0066",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[59] = {										
	look: [ [0,0,1], [0,1,1], [1,1,0] ],			//  **
	color: "#CC6699",								// **
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[60] = {										
	look: [ [0,0,1], [1,1,1], [0,1,0] ],			//  *
	color: "#FF33FF",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}										

figure[61] = {										
	look: [ [0,1,0,0], [1,1,1,1] ],					// ****
	color: "#CC33CC",								//   *
	v_pos_corr: 1,								
	g_pos_corr: 0							
}																
	
figure[62] = {										
	look: [ [1,1,0,0], [0,1,1,1] ],					// ***
	color: "#9900CC",								//   **
	v_pos_corr: 1,								
	g_pos_corr: 0
}																

figure[63] = {										
	look: [ [1,0,0], [1,0,0], [1,1,1] ],			// ***
	color: "#9900FF",								//   *
	v_pos_corr: 0,									//	 *
	g_pos_corr: 0									
}																
	
figure[64] = {										
	look: [ [0,1,1], [1,1,1] ],						// ***
	color: "#6633CC",								// **
	v_pos_corr: 0,								
	g_pos_corr: 0									
}																	 

figure[65] = {										
	look: [ [0,0,1,0], [1,1,1,1] ],					// ****
	color: "#6600FF",								//  *
	v_pos_corr: 0,								
	g_pos_corr: -1								
}																 	

figure[66] = {										
	look: [ [1,0,0,0], [1,1,1,1] ],					// ****
	color: "#666699",								//    *
	v_pos_corr: 1,								
	g_pos_corr: 0								
}																

figure[67] = {										
	look: [ [1,1,0], [1,1,1] ],						// ***
	color: "#3333CC",								//  **
	v_pos_corr: 0,								
	g_pos_corr: 0									
}																

figure[68] = {										
	look: [ [0,1,0], [0,1,0], [1,1,1] ],			// ***
	color: "#0000CC",								//  *
	v_pos_corr: 0,									//  *
	g_pos_corr: 0									
}																

figure[69] = {										
	look: [ [1,0,1], [1,1,1] ],						// ***
	color: "#0033FF",								// * *
	v_pos_corr: 0,								
	g_pos_corr: 0									
}																 	

figure[70] = {										
	look: [ [0,0,0,1], [1,1,1,1] ],					// ****
	color: "#3399CC",								// *
	v_pos_corr: 0,								
	g_pos_corr: -1									 
}																	

figure[71] = {										
	look: [ [0,1,0], [1,1,1], [0,1,0] ],			//  *
	color: "#669999",								// ***
	v_pos_corr: 0,									//  *			
	g_pos_corr: 0						
}																

figure[72] = {										
	look: [ [1,0,0], [1,1,1], [0,0,1] ],			// *
	color: "#33FFFF",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0
}																

figure[73] = {										
	look: [ [1,0,0], [1,1,1], [0,1,0] ],			//  *
	color: "#00FFCC",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0									
}																

figure[74] = {										
	look: [ [0,0,1,1], [1,1,1,0] ],					//  ***
	color: "#339966",								// **
	v_pos_corr: 0,												
	g_pos_corr: -1									
}											

//Фигуры 0-6 повернутые на 270 градусов

figure[75] = {
	look: [ [1], [1], [1], [1] ],			//****
	color: "#FFFF33",
	v_pos_corr: -2,
	g_pos_corr: 2	
}

figure[76] = {
	look: [ [0,1], [0,1], [1,1] ],
	color: "#CC9900",
	v_pos_corr: -1,
	g_pos_corr: 0							// *
}											// *** 

figure[77] = {
	look: [ [1,1], [0,1], [0,1] ],
	color: "#CC6600",
	v_pos_corr: -1,
	g_pos_corr: 0							//   *
}											// ***

figure[78] = {
	look: [ [1,1], [1,1] ],							
	color: "#CC6633",
	v_pos_corr: 0,
	g_pos_corr: 0							// **
}											// **

figure[79] = {
	look: [ [1,0], [1,1], [0,1] ],
	color: "#FF0000",
	v_pos_corr: -1,
	g_pos_corr: 1							//  **
}											// **

figure[80] = {
	look: [ [0,1], [1,1], [0,1] ],
	color: "#FF3333",
	v_pos_corr: -1,
	g_pos_corr: 0							//  *
}											// ***

figure[81] = {
	look: [ [0,1], [1,1], [1,0] ],
	color: "#993333",
	v_pos_corr: -1,
	g_pos_corr: 0							//  **
}											//	 **


//Фигуры усложненного варианта повернутые на 270 град
figure[82] = {
	look: [ [1], [1], [1], [1], [1] ],				// *****
	color: "#CC3366",
	v_pos_corr: -2,
	g_pos_corr: 2									
}	

figure[83] = {										
	look: [ [1,1,0], [0,1,0], [0,1,1] ],			//   *
	color: "#CC0066",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[84] = {										
	look: [ [1,0,0], [1,1,0], [0,1,1] ],			//  **
	color: "#CC6699",								// **
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}													

figure[85] = {										
	look: [ [0,1,0], [1,1,0], [0,1,1] ],			//  *
	color: "#FF33FF",								// ***
	v_pos_corr: 0,									// *
	g_pos_corr: 0									
}										

figure[86] = {										
	look: [ [1,0], [1,1], [1,0], [1,0] ],			// ****
	color: "#CC33CC",								//   *
	v_pos_corr: 0,								
	g_pos_corr: 1							
}																
	
figure[87] = {										
	look: [ [0,1], [1,1], [1,0], [1,0] ],			// ***
	color: "#9900CC",								//   **
	v_pos_corr: 0,								
	g_pos_corr: 1
}																

figure[88] = {										
	look: [ [1,1,1], [1,0,0], [1,0,0] ],			// ***
	color: "#9900FF",								//   *
	v_pos_corr: 0,									//	 *
	g_pos_corr: 0									
}																
	
figure[89] = {										
	look: [ [1,0], [1,1], [1,1] ],					// ***
	color: "#6633CC",								// **
	v_pos_corr: 0,								
	g_pos_corr: 1									
}																	 

figure[90] = {										
	look: [ [1,0], [1,0], [1,1], [1,0] ],			// ****
	color: "#6600FF",								//  *
	v_pos_corr: -1,								
	g_pos_corr: 2								
}																 	

figure[91] = {										
	look: [ [1,1], [1,0], [1,0], [1,0] ],			// ****
	color: "#666699",								//    *
	v_pos_corr: 0,								
	g_pos_corr: 1								
}																

figure[92] = {										
	look: [ [1,1], [1,1], [1,0] ],					// ***
	color: "#3333CC",								//  **
	v_pos_corr: 0,								
	g_pos_corr: 1									
}																

figure[93] = {										
	look: [ [1,0,0], [1,1,1], [1,0,0] ],			// ***
	color: "#0000CC",								//  *
	v_pos_corr: 0,									//  *
	g_pos_corr: 0									
}																

figure[94] = {										
	look: [ [1,1], [1,0], [1,1] ],					// ***
	color: "#0033FF",								// * *
	v_pos_corr: 0,								
	g_pos_corr: 1									
}																 	

figure[95] = {										
	look: [ [1,0], [1,0], [1,0], [1,1] ],			// ****
	color: "#3399CC",								// *
	v_pos_corr: -1,								
	g_pos_corr: 2									 
}																	

figure[96] = {										
	look: [ [0,1,0], [1,1,1], [0,1,0] ],			//  *
	color: "#669999",								// ***
	v_pos_corr: 0,									//  *			
	g_pos_corr: 0						
}																

figure[97] = {										
	look: [ [0,1,1], [0,1,0], [1,1,0] ],			// *
	color: "#33FFFF",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0
}																

figure[98] = {										
	look: [ [0,1,1], [1,1,0], [0,1,0] ],			//  *
	color: "#00FFCC",								// ***
	v_pos_corr: 0,									//   *			
	g_pos_corr: 0									
}																

figure[99] = {										
	look: [ [1,0], [1,0], [1,1], [0,1] ],			//  ***
	color: "#339966",								// **
	v_pos_corr: -1,												
	g_pos_corr: 2									
}											

