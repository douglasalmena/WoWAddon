// ==UserScript==
// @name       WoWAddon
// @namespace  http://github.com/scotilen/WoWAddon
// @version    1
// @description  It is a package of addons for World of Warcraft web auction house.
// @match      https://us.battle.net/wow/en/vault/character/auction/*
// @require    file://C:\dev\WoWAddon\WoWAddon\view\SummaryViewFactory.js
// @require    file://C:\dev\WoWAddon\WoWAddon\view\MoneyViewFactory.js
// @require    file://C:\dev\WoWAddon\WoWAddon\transaction\CreateNewSummaryTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\storage\WebStorableContainer.js
// @require    file://C:\dev\WoWAddon\WoWAddon\storage\Storage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\storage\SessionStorage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\storage\LocalStorage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\storage\IndexableStorage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\notification\transaction\AuctionListenNotificationTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\notification\transaction\AuctionCreateNotificationTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\notification\storage\AuctionNotificationStorage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\notification\data\AuctionNotification.js
// @require    file://C:\dev\WoWAddon\WoWAddon\mapping\transaction\AuctionMappingTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\mapping\mapper\AuctionItemMapper.js
// @require    file://C:\dev\WoWAddon\WoWAddon\mapping\data\AuctionItem.js
// @require    file://C:\dev\WoWAddon\WoWAddon\data\SummaryData.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\unitprice\view\UnitPriceViewFactory.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\unitprice\transaction\CreateUnitPriceForSellTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\unitprice\transaction\CreateRefreshUnitPriceEventTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\unitprice\transaction\ChangeResetFormForCreateAuction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\unitprice\UnitPriceAddon.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\view\TimeLeftViewFactory.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\transaction\DurationTimerTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\transaction\AuctionTimeTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\transaction\AuctionCheckTimeLeftChangesTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\storage\TimeLeftChangeStorage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\storage\TimeLeftAuctionStorage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\mapper\AuctionItemWithTimeLeftMapper.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\data\AuctionTime.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\data\AuctionDuration.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\data\AuctionChangeTimeLeftData.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\timeleft\TimeLeftAddon.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\themeless\view\ThemeLessSummaryViewFactory.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\themeless\transaction\CreateNewThemeLessSummaryTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\themeless\transaction\ApplyThemeLessTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\themeless\storage\ThemeLessStorage.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\themeless\data\ThemeLessSummaryData.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\themeless\ThemeLessAddon.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\fastbid\transaction\ReplaceOpenBidDialogTransaction.js
// @require    file://C:\dev\WoWAddon\WoWAddon\addon\fastbid\FastBidAddon.js
// @require    file://C:\dev\WoWAddon\WoWAddon\config\client\AllAddonClient.js
// @require    file://C:\dev\WoWAddon\WoWAddon\config\server\AllAddonServer.js
// @copyright  2014+, miguelcjalmeida@gmail.com
// ==/UserScript==

