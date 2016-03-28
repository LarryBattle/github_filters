/**
* This script compresses the query samples found on github.com into a one hash object. 
*
* @date: Mar 28, 2016
* @author: Larry Battle
*/

"use strict";
let pages = [{
  "searchs": [
    "language:go",
    "amazing language:go",
    "octocat in:file",
    "octocat in:path",
    "octocat in:file,path",
    "display language:scss",
    "Integer",
    "element language:xml size:100",
    "user:mozilla language:markdown",
    "android language:java fork:true",
    "function size:>10000 language:python",
    "console path:app/public language:javascript",
    "form path:cgi-bin language:perl",
    "filename:.vimrc commands",
    "minitest filename:test_helper path:test language:ruby",
    "form path:cgi-bin extension:pm",
    "icon size:>200000 extension:css",
    "user:github extension:rb",
    "repo:mozilla/shumway extension:as"
  ],
  "url": "https://help.github.com/articles/searching-code/"
}, {
  "searchs": [
    "jquery in:name",
    "jquery in:name,description",
    "jquery in:readme",
    "size:1000",
    "size:>=30000",
    "size:<50",
    "size:50..120",
    "forks:5",
    "forks:>=205",
    "forks:<90",
    "forks:10..20",
    "github fork:true",
    "github fork:only",
    "github",
    "forks:>500 fork:only",
    "webos created:<2011-01-01",
    "css pushed:<2013-02-01",
    "case pushed:>=2013-03-06 fork:only",
    "user:github",
    "user:defunkt forks:>100",
    "rails language:javascript",
    "stars:10..20",
    "stars:>=500 fork:true language:php"
  ],
  "url": "https://help.github.com/articles/searching-repositories/"
}, {
  "searchs": [
    "cats created:>=2012-04-30",
    "cats created:>2012-04-29",
    "cats stars:\"10 .. *\"",
    "cats created:\"2012-04-30 .. * \"",
    "cats stars:\"10 .. 50\"",
    "cats created:\"2012-04-30 .. 2012-07-04\"",
    "cats created:<2012-07-05",
    "cats created:<=2012-07-04",
    "cats stars:\"* .. 10\"",
    "cats created:\"* .. 2012-04-30\"",
    "cats stars:\"1 .. 10\"",
    "cats created:\"2012-04-30 .. 2012-07-04\"",
    "cats pushed:\"2012-04-30 .. 2012-07-04\"",
    "cats stars:>10 -language:javascript",
    "mentions:defunkt -user:github",
    "cats stars:>10",
    "cats created:2012-04-30..2012-07-04",
    "cats NOT \"hello world\""
  ],
  "url": "https://help.github.com/articles/search-syntax/"
}, {
  "searchs": [
    "cat type:pr",
    "github commenter:defunkt type:issue",
    "warning in:title",
    "error in:title,body",
    "shipit in:comment",
    "is:public",
    "is:private cupcake",
    "cool author:gjtorikian",
    "bootstrap in:body author:mdo",
    "assignee:vmg",
    "assignee:fjakobs repo:ajaxorg/ace",
    "resque mentions:defunkt",
    "mentions:azakus assignee:arv",
    "commenter:lennartcl",
    "github commenter:defunkt user:github",
    "involves:defunkt involves:jlord",
    "NOT bootstrap in:body involves:mdo",
    "team:jekyll/owners",
    "team:myorg/ops is:open is:pr",
    "terrible state:closed in:body",
    "ie state:open mentions:fat",
    "cat label:bug",
    "label:bug label:resolved",
    "broken in:body -label:bug label:priority",
    "milestone:\"overhaul\"",
    "priority no:label",
    "sprint no:milestone type:issue",
    "important no:assignee language:java type:issue",
    "language:ruby state:open",
    "mentions:holman language:bash",
    "bugfix is:pr is:unmerged",
    "performance is:open is:issue",
    "error is:closed",
    "language:go status:pending",
    "created:2015-05-01..2015-05-30 status:failure",
    "is:open status:success finally in:body",
    "head:change is:closed is:unmerged",
    "base:gh-pages",
    "language:c# created:<2011-01-01 state:open",
    "weird in:body updated:>=2013-02-01",
    "author:puzrin created:2012-11-01..2012-12-01",
    "language:javascript merged:<2011-01-01 ",
    "fast in:title language:ruby merged:>=2014-05-01",
    "silly in:body closed:<2012-10-01",
    "language:swift closed:>2014-06-11",
    "state:closed comments:>100",
    "comments:500..1000",
    "user:defunkt ubuntu",
    "repo:mozilla/shumway created:<2012-03-01",
    "e1109ab",
    "0eff326d6213c is:merged"
  ],
  "url": "https://help.github.com/articles/searching-issues/"
}, {
  "searchs": [
    "tom in:email type:org",
    "mike in:name created:<2011-01-01 type:user",
    "tom in:email",
    "kenya in:login",
    "bolton in:fullname",
    "repos:>9000",
    "bert repos:10..30",
    "repos:1 location:iceland",
    "language:javascript location:russia",
    "jenny language:javascript in:fullname",
    "created:<2011-01-01",
    "created:>=2013-05-11",
    "created:2013-03-06 location:london",
    "created:2010-01-01..2011-01-01 john in:login",
    "followers:>=1000",
    "sparkle followers:1..10"
  ],
  "url": "https://help.github.com/articles/searching-users/"
}];

let elements = pages.reduce( (o, page )=>{
  if(!page || !page.searchs){ return }
  page.searchs.forEach( query => {
    let filters = query.match(/\S+:\S+/g);
    if(!filters || !filters.length){ return; }
    filters.forEach( filter => {
      let filterName = filter.split(":")[0];
      let fts = o[filterName] || [];
      // TODO Change data structure because searching and sorting is slow.
      if(!fts.some(f => f === filter )){
        o[filterName] = fts.concat(filter).sort();
      }
    });
  });
  return o;
}, {});

console.dir( elements );





