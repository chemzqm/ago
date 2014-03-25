var assert = require('assert');

describe('ago', function() {
  it('1 minute ago', function() {
    var ago = require('ago');
    var now = new Date;
    var res = ago(now - 60*1000);
    assert.equal(res, '1分钟前');
  })

  it('1 hour ago', function() {
    var ago = require('ago');
    var now = new Date;
    var res = ago(now - 60*60*1000);
    assert.equal(res, '1小时前');
  })

  it('1 day ago', function() {
    var ago = require('ago');
    var now = new Date;
    var res = ago(now - 24*60*60*1000);
    assert.equal(res, '1天前');
  })

  it('1 week ago', function() {
    var ago = require('ago');
    var now = new Date;
    var res = ago(now - 7*24*60*60*1000);
    assert.equal(res, '1周前');
  })

  it('1 month ago', function() {
    var ago = require('ago');
    var now = new Date;
    var res = ago(now - 31*24*60*60*1000);
    assert.equal(res, '1月前');
  })

  it('1 year ago', function() {
    var ago = require('ago');
    var now = new Date;
    var res = ago(now - 366*24*60*60*1000);
    assert.equal(res, '1年前');
  })

})
