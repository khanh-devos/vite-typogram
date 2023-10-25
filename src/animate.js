export function separate(text) {
  let [res, checkBracket, start, classname, animation] = [[''], true, false, '', {}];
  for (const line of text.split('\n')) {
    // define animate
    if (line.includes('@(animate:{')) {
      const ani = line.substring(line.indexOf('{') + 1, line.indexOf('}'));
      for (const item of ani.split(',')) {
        animation[item.split(':')[0].trim()] = item.split(':')[1];
      }
      continue;
    }

    if (line.includes('(')) {
      start = true;
      if (start) {
        if (checkBracket) {
          res.push(line.replace('(', ''));
          checkBracket = false;
        } else res.push(line);
      }
    } else if (line.includes(')@{')) {
      classname = line.substring(line.indexOf('{') + 1, line.indexOf('}'));
      if (start) {
        checkBracket = true;
        res.push(line.substr(0, line.indexOf(')@{')));
      }
      res.push('\n###');
      start = false;
    } else if (start) res.push(line);
  }

  return [res.join('\n').split('###'), classname, animation];
}

const delay = (time) => new Promise((res) => setTimeout(res, time));

export async function animation(classname, ani) {
  const { time, repeat } = ani;
  do {
    for (const svg of document.getElementsByClassName(classname)) {
      if (svg.getAttribute('width') === '0') continue;
      svg.style.display = 'block';

      while (!ani.repeat) await delay(1000);

      await delay(time);
      svg.style.display = 'none';
    }

    document.querySelector(`.${classname}`).style.display = 'block';
    // console.log(document.querySelector(`.${classname}`));
    // await delay(2000);
  } while (repeat === 'true');
}