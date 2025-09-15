// jS Execution Concept
// {}-[1.Global Execution context]or[Global Environment]    -refered in this variable
// in window this.value  == window object
// js is single threaded
// [2.Function Execution context]
// [3.Eval Execution context]-property

// js program execution
// {}- [2 Phase]
//  [1.Memory Creation Phase]or [Creation Phase]-- Memory is allocated to declared varialbes etc.
//  [1. Execution Phase]- execution ex-function

//example
// let val1=10;
// let val2=5;
// function addNum(num1,num2){
//     let total=num1+num2;
//     return total;
// }
// let result1=addNum(val1,val2);
// let result2=addNum(10,2);


/** 1.Global Execution--this
 * 
 * 2.Memory Phase
 * val1->undefined
 * val2->undefined
 * addNum->definition
 * Result->undefined
 * Result2->undefined
 * 
 * 3.Execution Phase
 * val<-10
 * val<-5
 * addNum-->-------------------------------------------
 *          |Sandbox:   1.New Variable environment    |
 *          |                     +                   |
 *          |           2.Execution Thread            |
 *          -------------------------------------------
 *          | [Seperate execution context]- is created each time a function executes  
 *          | new Variable env. + Execution thread
 *          |
 *          |  since sandbox is created- 2phase executes again for it 
 *          |---8  ie. 2.Memmory phase-
 *            |  - val1->undefined
 *            |  - val2->undefined
 *            |  -total->undefined
 *            3.Execution phase-
 *            |  - num1->10
 *            |  - num2->5
 *            |  -total->15
 * 
 *            | [[New executuon context **Deleted.]]-after finish
 * result1->15
 * addNum-->-------------------------------------------
 *          |Sandbox:   1.New Variable environment    |
 *          |                     +                   |
 *          |           2.Execution Thread            |
 *          -------------------------------------------
 *          |---  ie. 2.Memmory phase-
 *          |3.Execution phase-
 *          | [[New executuon context **Deleted.]]
 * result2->20
 */


/**call Stack
 *
 * one(){two(),three()}
 * stack--LIFO
 *          |                  three()                |
 *          |                   two()                 |
 *          |                   one()                 |
 *          |           Global execution              |
 *          -------------------------------------------
 * stack exeution in console-source-snipet
 */

