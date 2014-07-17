﻿var SearchAllMapper = function () { };

SearchAllMapper.prototype = new AuctionItemMapper();

SearchAllMapper.getValue = function (view, container) {

    var gold = view.find('.' + container + ' span.icon-gold').text().replace(',','');
    var silver = view.find('.' + container + ' span.icon-silver').text().replace(',', '');
    var copper = view.find('.' + container + ' span.icon-copper').text().replace(',', '');

    return Auction.deformatMoney(gold, silver, copper);
}

SearchAllMapper.prototype.map = function (view) {
    var item = AuctionItemMapper.prototype.map.call(this, view); // calls super map function


    item.bid = SearchAllMapper.getValue(view, 'price-bid');
    item.buyout = SearchAllMapper.getValue(view, 'price-buyout');

    if (item.buyout > 0) {
        item.ratioBidBuyout = item.bid / item.buyout;
    }
    else {
        item.ratioBidBuyout = 0;
    }

    return item;
}

unsafeWindow.SearchAllMapper = SearchAllMapper;