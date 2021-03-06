function writeIt() {
    // The weekDays array is created by declaration; the weekEnd array is generated by creating a blank array and then pushing items into it.
    var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    writeArray("Week Days", weekDays);
    var weekEnd = new Array();
    weekEnd.push("Saturday");
    weekEnd.push("Sunday");
    writeArray("Weekend", weekEnd);
    
    // Created a new array with the full week array combine the weekEnd. I want Sunday first and Saturday at the end, I use the unshift() method to push Sunday on to the front of array and push to append Saturday to the end.
    var week = weekDays.concat([]);
    week. unshift(weekEnd[1]);
    week.push(weekEnd[0]);
    writeArray("Week", week);
    
    // Created  a midWeek array using the slice() method.
    var midWeek = week.slice(2,5);
    writeArray("Mid Week", midWeek); 
    
    // Created a sorteds verison of the full week and iterate through each item in the sortedWeek array. 
    var sortedWeek = week.sort();
    document.write("<b>Sorted Days :</b><br>");
    for (dayIndex in sortedWeek){
        document.write(sortedWeek[dayIndex] + "<br>");
    } 
    // Created a array for the summer months of the year. 
    var summer = ["June", "July", "August"];
    writeArray("Summer Months", summer);
    
    // Created a array for the spring months of the year.
    var spring = ["March", "April", "May"];
    writeArray("Spring Months", spring);

    // Created a array for the fall months of the year.
    var fall = ["September", "October", "November"];
    writeArray("Fall Months", fall);
    
 
    // Created a array for the winter months of the year.
    var winter = ["December", "January", "February"];
    writeArray("Winter Months", winter);

    // Created a array for the months of the year.
    var year = winter.concat(spring, summer, fall);
    writeArray("Months of the Year", year);
}
// A JS function that accepts a message and array as argument as msg, and arr.
function writeArray(msg, arr) {
    // The array is converted to a string using the join() method, and also writes the message and joined array string. 
    var arrString = arr.join(" | ");
    document.write("<b>" + msg + ": </b>" + arrString + "<br><br>");
}