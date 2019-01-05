Shoes.app title: 'OSRS Bot' do
  stack margin: 10 do
    button 'Setup Window Dimensions' do
      `node ~/OsrsBot/src/scripts/setup.js`
    end
    button 'Check for special attack and use it' do
      `node ~/OsrsBot/src/scripts/useSpecial.js`
    end
    button 'Clean herbs' do
      `node ~/OsrsBot/src/scripts/useSpecial.js`
    end
  end
end
