import re
def song_decoder(song):
    return re.sub("(WUB)+", " ", song).strip()

print(song_decoder("AWUBBWUBC"))
print(song_decoder("AWUBWUBWUBBWUBWUBWUBC"))
print(song_decoder("WUBAWUBBWUBCWUB"))
