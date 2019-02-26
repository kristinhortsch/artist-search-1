
const artistResults = [
  { 'created':'2019-02-22T23:07:52.208Z', 'count':44, 'offset':2, 'artists':[{ 'id':'c49d69dc-e008-47cf-b5ff-160fafb1fe1f', 'type':'Group', 'type-id':'e431f5f6-b5d2-343d-8b36-72607fffb74b', 'score':81, 'name':'Nirvana', 'sort-name':'Nirvana', 'country':'FR', 'area':{ 'id':'08310658-51eb-3801-80de-5a0739207115', 'type':'Country', 'type-id':'06dd0ae4-8c74-30bb-b43d-95dcedf961de', 'name':'France', 'sort-name':'France', 'life-span':{ 'ended':null } }, 'disambiguation':'\'70s French band from Martigues', 'life-span':{ 'ended':null } }, { 'id':'85af0709-95db-4fbc-801a-120e9f4766d0', 'type':'Group', 'type-id':'e431f5f6-b5d2-343d-8b36-72607fffb74b', 'score':80, 'name':'Nirvana', 'sort-name':'Nirvana', 'country':'FI', 'area':{ 'id':'6a264f94-6ff1-30b1-9a81-41f7bfabd616', 'type':'Country', 'type-id':'06dd0ae4-8c74-30bb-b43d-95dcedf961de', 'name':'Finland', 'sort-name':'Finland', 'life-span':{ 'ended':null } }, 'disambiguation':'Early 1980\'s Finnish punk band', 'life-span':{ 'ended':null }, 'tags':[{ 'count':1, 'name':'finland' }, { 'count':1, 'name':'punk' }] }, { 'id':'3aa878c0-224b-41e5-abd1-63be359d2bca', 'score':80, 'name':'Nirvana', 'sort-name':'Nirvana', 'disambiguation':'founded in 1987 by a Michael Jackson double/imitator', 'life-span':{ 'begin':'1987', 'ended':null } }, { 'id':'28a4618c-38e4-4027-ad2c-db66a14a2d85', 'type':'Group', 'type-id':'e431f5f6-b5d2-343d-8b36-72607fffb74b', 'score':80, 'name':'Nirvana', 'sort-name':'Nirvana', 'country':'YU', 'area':{ 'id':'885dce63-c211-3033-8cf7-46cb82d440c7', 'type':'Country', 'type-id':'06dd0ae4-8c74-30bb-b43d-95dcedf961de', 'name':'Yugoslavia', 'sort-name':'Yugoslavia', 'life-span':{ 'begin':'1918', 'end':'2003', 'ended':true } }, 'disambiguation':'Croatian prog-rock band active in first half of 70s in former Yugoslavia.', 'life-span':{ 'ended':null } }, { 'id':'c3a64a25-251b-4d03-afba-1471440245b8', 'type':'Group', 'type-id':'e431f5f6-b5d2-343d-8b36-72607fffb74b', 'score':76, 'name':'Approaching Nirvana', 'sort-name':'Approaching Nirvana', 'country':'US', 'area':{ 'id':'489ce91b-6658-3307-9877-795b68554c98', 'type':'Country', 'type-id':'06dd0ae4-8c74-30bb-b43d-95dcedf961de', 'name':'United States', 'sort-name':'United States', 'life-span':{ 'ended':null } }, 'life-span':{ 'begin':'2009', 'ended':null } }, { 'id':'f2dfdff9-3862-4be0-bf85-9c833fa3059e', 'type':'Group', 'type-id':'e431f5f6-b5d2-343d-8b36-72607fffb74b', 'score':69, 'name':'Nirvana 2002', 'sort-name':'Nirvana 2002', 'country':'SE', 'area':{ 'id':'23d10872-f5ae-3f0c-bf55-332788a16ecb', 'type':'Country', 'type-id':'06dd0ae4-8c74-30bb-b43d-95dcedf961de', 'name':'Sweden', 'sort-name':'Sweden', 'life-span':{ 'ended':null } }, 'disambiguation':'Swedish death metal band', 'life-span':{ 'begin':'1988', 'end':'2012', 'ended':true }, 'aliases':[{ 'sort-name':'Nirvana', 'name':'Nirvana', 'locale':null, 'type':null, 'primary':null, 'begin-date':'1988', 'end-date':'1988' }, { 'sort-name':'N2K2', 'name':'N2K2', 'locale':null, 'type':null, 'primary':null, 'begin-date':null, 'end-date':null }, { 'sort-name':'Prophet 2002', 'name':'Prophet 2002', 'locale':null, 'type':null, 'primary':null, 'begin-date':'1988', 'end-date':'1988' }] }, { 'id':'477a19b3-6d80-4622-bde9-29a49c10dbd7', 'type':'Group', 'type-id':'e431f5f6-b5d2-343d-8b36-72607fffb74b', 'score':69, 'name':'Νιρβάνα', 'sort-name':'Nirvana', 'country':'GR', 'area':{ 'id':'803db0ca-b6ed-3bbc-aeb8-f89efd0a2168', 'type':'Country', 'type-id':'06dd0ae4-8c74-30bb-b43d-95dcedf961de', 'name':'Greece', 'sort-name':'Greece', 'life-span':{ 'ended':null } }, 'life-span':{ 'ended':null } }, { 'id':'329c04ae-3b73-4ca3-996f-75608ab1befb', 'type':'Person', 'type-id':'b6e035f4-3ce9-331c-97df-83397230b0df', 'score':68, 'name':'Nirvana Singh', 'sort-name':'Singh, Nirvana', 'life-span':{ 'ended':null } }, { 'id':'86f9ae24-ba2a-4d55-9275-0b89b85f6e3a', 'score':68, 'name':'Weed Nirvana', 'sort-name':'Weed Nirvana', 'life-span':{ 'ended':null } }, { 'id':'b305320e-c158-43f4-b5be-4450e2f99a32', 'score':68, 'name':'El Nirvana', 'sort-name':'Nirvana, El', 'life-span':{ 'ended':null } }] }
];

const songs = [
  { 'iswcs':[], 'languages':['eng'], 'language':'eng', 'disambiguation':'', 'attributes':[], 'id':'009a2e9d-9cdb-4e59-b517-096117e0a521', 'type':null, 'title':'Gone', 'type-id':null }, { 'type':null, 'type-id':null, 'title':'Cryin Wolf', 'id':'069f7eb7-ab8c-46ec-b375-baeb1ce1d7a4', 'attributes':[], 'language':null, 'disambiguation':'', 'languages':[] }
];

const lyrics = [
  {
    'lyrics': 'Turn your magic on\nUmi she\'d say\nEverything you want\'s a dream away\nAnd we are legends every day\nThat\'s what she told me\n\nTurn your magic on\nTo me she\'d say\nEverything you want\'s a dream away\nUnder this pressure, under this weight\nWe are diamonds\n\nI feel my heart beating\nI feel my heart underneath my skin\nI feel my heart beating\nOh, you make me feel\nLike I\'m alive again\n(Alive again)\nOh, you make me feel\nLike I\'m alive again\n\nSaid I can\'t go on, not in this way\nI\'m a dream that died by light of day\nGonna hold up half the sky and say\nOnly I own me\n\nI feel my heart beating\nI feel my heart underneath my skin\nOh, I can feel my heart beating\n\'Cause you make me feel\nLike I\'m alive again\n(Alive again)\nOh, you make me feel\nLike I\'m alive again\n\nTurn your magic on\nUmi she\'d say\nEverything you want\'s a dream away\nUnder this pressure, under this weight\nWe are diamonds taking shape\nWe are diamonds taking shape\n\nWoo hoo\nWoo hoo\n\nIf we\'ve only got this life\nThis adventure, oh, then I\nAnd if we\'ve only got this life\nYou get me through, ah\nAnd if we\'ve only got this life\nIn this adventure, oh, then I\nWant to share it with you\nWith you\nWith you\nI see you, I see you\n\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\n\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\n\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)\nWoo hoo (Woo hoo)'
  }
];
const getArtists = () => {
  return Promise.resolve({
    results: artistResults
  });
};
const getSongLyrics = () => {
  return Promise.resolve({
    results: lyrics
  });
};


const getArtistWorks = () => {
  return Promise.resolve({
    results: songs
  });
};


export { getArtists, getArtistWorks, getSongLyrics };

