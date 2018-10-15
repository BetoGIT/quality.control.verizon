
If Browser("PetClinic :: a Spring").Exist(5) Then
	Browser("PetClinic :: a Spring").Close
End If @@ hightlight id_;_Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring").Link("Home")_;_script infofile_;_ZIP::ssf1.xml_;_
SystemUtil.Run "iexplore.exe", "http://NB-MX-15:9082"

Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring").WebElement("Home").Click
 @@ hightlight id_;_Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring").Link("Home")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring").WebElement("Welcome").Check CheckPoint("Welcome") @@ hightlight id_;_Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring 2").WebElement("Welcome")_;_script infofile_;_ZIP::ssf3.xml_;_

Browser("PetClinic :: a Spring").Close
 @@ hightlight id_;_Browser("PetClinic :: a Spring_2").Page("PetClinic :: a Spring")_;_script infofile_;_ZIP::ssf4.xml_;_
