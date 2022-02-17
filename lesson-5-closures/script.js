
var John = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totalpaid: [],
    calcTips: function() {
        for(var i = 0; i < this.bills.length; i++){
            var percent;
            var bill = this.bills[i];
            if (bill < 50){
                percent = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percent = 0.15;
            } else {
                percent = 0.1;
            }
            this.tips[i] = bill * percent;
            this.totalpaid[i] = this.tips[i] + this.bills[i];
        }
    }
}
John.calcTips();

var Mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    totalpaid: [],
    calcTips: function() {
        for(var i = 0; i < this.bills.length; i++){
            var percent;
            var bill = this.bills[i];
            if (bill <100){
                percent = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percent = 0.1;
            } else {
                percent = 0.25;
            }
            this.tips[i] = bill * percent;
            this.totalpaid[i] = this.tips[i] + this.bills[i];
        }
    }
}
Mark.calcTips();

function calcaverage(tips) {
    var average = 0;
    for (var i = 0; i < tips.length; i++){
        average = average + tips[i];
    }
    return average/ tips.length;
}

var JohnAverageTip = calcaverage(John.tips);
var MarkAverageTip = calcaverage(Mark.tips);

if (JohnAverageTip > MarkAverageTip) {
	console.log( "John's family paid a large average tip:" + ' ' + "$" + ' ' + JohnAverageTip);
} else if (JohnAverageTip < MarkAverageTip) {
	console.log("Marks's family paid a large average tip:" + ' ' + "$" + MarkAverageTip);
} else {
    console.log("Families paid the same amount of tips:" + ' ' + "$" + MarkAverageTip + 'and' + + "$" + JohnAverageTip);
}