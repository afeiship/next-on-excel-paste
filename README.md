# next-on-excel-paste
> When excel paste to picture.

## installation
```bash
npm install -S afeiship/next-on-excel-paste --registry=https://registry.npm.taobao.org
```

## usage
```html
<figure class="container">
  <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
  <figcaption>Paste Your Picture To Here!</figcaption>
</figure>
<script>
  document.addEventListener('paste', function(inEvent) {
    const file = nx.onExcelPaste(inEvent);
    console.log('file:->', file);
    file &&
      nx.fileToBase64(file).then((base64) => {
        document.querySelector('img').src = base64;
      });
  });
</script>
```
