# **Template stage box**

The project is a template of the scenario from [Super Mario bros 3][smb3] on the [NES][nes].  
Shows some images in a similar style at the game ending.

You can check an example [here][web], made by me.  

Feel free to edit the template or take it as reference.

## **Usage**

1. Download the folder of the project.
2. Edit file **chapters.json** with data of images you want to show.
3. Edit ALL content wrapped for square braces([ ]) on file **index.html**.
4. Press the billboard button for start the animation.

See the CUSTOM DATA section for knowing how should be uploaded valid data.

## **CUSTOM DATA**

If the project shows a error window, invalid data was entered.  
Follow nexts guidelines for using data correctly.

### charpters.json
- The content should be and array of objects with a length between 3 and 8.
- Each object should have the properties *src*, *alt* and *description*.
- *Description* property length should be less than or equals to 40 characters.

### index.html
- Billboard button content should be less than or equals to 15 characters.
- Final message div content should be less than or equals to 30 characters.
- Title tag, copyright paragraph, author anchor and year span without constraints.

## **Thanks**

- To [Nintendo][nintendo] for creating the videogame Super mario bros. 3.
- To [Henri][henri] on Youtube for their version of [game ending][cover] song.

## **Author**

**Username:** Gabit  
**Profession:** Autodidact software developer

[smb3]: https://en.wikipedia.org/wiki/Super_Mario_Bros._3
[nes]: https://en.wikipedia.org/wiki/Nintendo_Entertainment_System
[nintendo]: https://www.nintendo.com/
[henri]: https://www.youtube.com/channel/UC55qorWbwyPcUVPzh7iBU5w
[cover]: https://www.youtube.com/watch?v=l5qNAMM7CpI
[web]: https://ciao2021.netlify.app/