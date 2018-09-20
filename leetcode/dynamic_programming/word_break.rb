=begin
MM:
  BU: Have an array of booleans set to false. Iterate over `s` and check if the
  value at `i` is the end of any of the words in the dictionary. If it is, check
  if the previous values match up with the word (meaning we have a match). If
  the index at the beginning of the word is `false`, we set the current idx
  in the boolean array to `true`. If the starting index is `true`, we do nothing.
  Essentially, this is accounting for words where the last letter of one word
  is the same as the first letter of another word (i.e., overlap).
=end

def word_break(s, word_dict)
  overlap_arr = [false] * s.size

  s.each_char.with_index do |c, i|

    word_dict.each do |word|
      if word[-1] == c
        word_start_idx = word.size - 1

        word.each_char.with_index do |w, j|

        end
      end

    end

  end
end
