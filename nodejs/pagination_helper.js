function PaginationHelper(collection, itemsPerPage)
{
	this.items = collection.length;
	this.items_page = itemsPerPage;
	this.pages = Math.ceil(this.items / this.items_page);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function()
{
	return this.items;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function()
{
	return this.pages;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex)
{
	var pages = this.pages - 1;
	if(this.items == 0 || pageIndex < 0 || pageIndex > pages) return -1;
	return (pageIndex == pages) ? (this.items % this.items_page) : this.items_page;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex)
{
	if(this.items == 0 || itemIndex < 0 || itemIndex > this.items) return -1;
	return Math.floor(itemIndex / this.items_page);
}


//var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
var helper = new PaginationHelper([], 4);
console.log(helper.pageCount(), 2); //should == 2
console.log(helper.itemCount(), 6); //should == 6
console.log(helper.pageItemCount(0), 4); //should == 4
console.log(helper.pageItemCount(1), 2); // last page - should == 2
console.log(helper.pageItemCount(2), -1); // should == -1 since the page is invalid
console.log(helper.pageIndex(5), 1); //should == 1 (zero based index)
console.log(helper.pageIndex(2), 0); //should == 0
console.log(helper.pageIndex(0), 0); //should == 0
console.log(helper.pageIndex(20), -1); //should == -1
console.log(helper.pageIndex(-10), -1); //should == -1
