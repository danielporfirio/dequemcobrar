<address>
	<strong><%= nomeParlamentar %></strong><br>
	<strong>Partido:</strong> <%= partido %><br>
	<strong>Tel:</strong>(61) <%= fone %><br>
	<a href="mailto:<%= email %>"><%= email %></a>
	<br>
	<% if (_.isString(facebook)) { %>
	<a href="<%= facebook %>" target="_blank"><i class="icon-large icon-facebook"></i></a>
	<% } %>
	<% if ( _.isString(twitter)) { %>
	<a href="<%= twitter %>" target="_blank"><i class="icon-large icon-twitter"></i></a>
	<% } %>
	<% if (_.isString(webpage)) { %>
	<a href="<%= webpage %>" target="_blank"><i class="icon-large icon-globe"></i></a>
	<% } %>
</address>