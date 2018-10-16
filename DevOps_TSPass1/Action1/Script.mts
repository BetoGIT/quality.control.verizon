
If Browser("PetClinic :: a Spring").Exist(5) Then
	Browser("PetClinic :: a Spring").Close
End If
SystemUtil.Run "iexplore.exe", "http://devops.verizon.com:9080"


Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring").Link("Find owners").Click @@ hightlight id_;_Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring").Link("Find owners")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring_2").WebEdit("lastName").Set "Black" @@ hightlight id_;_Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring 2").WebEdit("lastName")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring_2").WebButton("Find Owner").Click @@ hightlight id_;_Browser("PetClinic :: a Spring").Page("PetClinic :: a Spring 2").WebButton("Find Owner")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("PetClinic :: a Spring").Close
