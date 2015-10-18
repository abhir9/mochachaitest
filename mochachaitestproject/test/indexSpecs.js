var chai =require('chai');
var expect=require('chai').expect;
var word= require('../index');
describe('sanitize',function()
{


  beforeEach(function()
{
  console.log('before');
})
afterEach(function()
{
console.log('after');
})

  it('return lowerccase of string', function()
{
  var inword  = 'HELLO';
  var outword = word.sanitize(inword);

  expect(outword).to.equal('hello');
  expect(outword).to.not.equal('HELLO');
  expect(outword).to.be.a('string');
  //expect('Hello world').to.not.be.a('Hello world');


});
  it('remove hyphen of string',function()
{
  var inword2='HELLO-';
  var outword2=word.sanitize(inword2);
  expect(outword2).to.equal('hello ');
})

describe('tokenize',function()
{
  it('return array of list ',function()
{
  var sentence="hello world";
  var tokenizesentence = word.tokenize(sentence);
  expect(tokenizesentence).to.include.members(['hello'],['world']);
})

})
})
/*
describe  ('github info',function()
{
  it.only('returns repo info from github',function(done){
    word.info(function(reply){
      console.log(reply);
      done();
    })
  })
})
*/
