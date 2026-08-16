const MATCHES_KEY = "milanMatches";

function getMatches() {
  return JSON.parse(localStorage.getItem(MATCHES_KEY)) || [];
}

function saveMatches(matches) {
  localStorage.setItem(
    MATCHES_KEY,
    JSON.stringify(matches)
  );
}

function addToShortlist(profile) {
  const matches = getMatches();

  const alreadyAdded = matches.some(
    item => item.id === profile.id
  );

  if (alreadyAdded) {
    return false;
  }

  matches.push(profile);
  saveMatches(matches);

  return true;
}

function removeFromShortlist(profileId) {
  const matches = getMatches();

  const updatedMatches = matches.filter(
    item => item.id !== profileId
  );

  saveMatches(updatedMatches);
}

function isShortlisted(profileId) {
  const matches = getMatches();

  return matches.some(
    item => item.id === profileId
  );
}

function getMatchCount() {
  return getMatches().length;
}
